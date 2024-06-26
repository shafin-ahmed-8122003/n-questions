import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const currentUser = query({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthenticated call to mutation");
        }

        const user = await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("tokenIdentifier"), identity.tokenIdentifier))
            .unique();

        return user;
    },
});

export const getSpecificUser = query({
    args: { userId: v.id("users") },
    handler: async (ctx, args) => {
        const user = await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("_id"), args.userId))
            .unique();
        return user;
    },
});

export const store = mutation({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Called storeUser without authentication present");
        }

        // Check if we've already stored this identity before.
        const user = await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("tokenIdentifier"), identity.tokenIdentifier))
            .unique();

        if (user !== null) {
            // If we've seen this identity before but the name has changed, patch the value.
            if (user.name !== identity.name) {
                await ctx.db.patch(user._id, { name: identity.name });
            }
            return user._id;
        }
        // If it's a new identity, create a new `User`.
        return await ctx.db.insert("users", {
            name: identity.name!,
            isAcceptingMessage: false,
            tokenIdentifier: identity.tokenIdentifier,
        });
    },
});

export const updateUser = mutation({
    args: { updatedUser: v.any() },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.updatedUser._id, args.updatedUser);
    },
});

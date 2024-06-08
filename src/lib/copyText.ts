import copy from "copy-to-clipboard";
import { toast } from "sonner";

const copyText = (text: string, toastText: string = "Text copied") => {
    copy(text);
    toast(toastText);
};

export default copyText;

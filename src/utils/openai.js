import OpenAI from "openai/index.mjs";
import { OPENAI_KEY } from "./constant";
const openai = new OpenAI({
    apiKey: OPENAI_KEY,
    dangerouslyAllowBrowser:true,
},);
export default openai;

import DOMPurify from 'dompurify';
export const DOMFormatter = (DOM) => {
    return DOMPurify.sanitize(`${DOM}`, { ALLOWED_TAGS: ['p', 'span', 'b', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'img', 'i', 'image','strong', 'em'], ALLOWED_ATTR: ['src', 'alt'], })
}
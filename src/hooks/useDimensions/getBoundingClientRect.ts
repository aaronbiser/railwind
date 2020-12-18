/* global DOMRect */

export default function (node: HTMLElement | null): DOMRect | null {
  return node && node.getBoundingClientRect()
}

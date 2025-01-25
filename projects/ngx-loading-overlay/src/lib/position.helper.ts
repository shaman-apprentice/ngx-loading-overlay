export function positionLoadingElems(
  container: HTMLElement,
  overlay: HTMLElement,
  loadingIndicator: HTMLElement,
): void {
  overlay.style.height = container.clientHeight + "px";
  overlay.style.top = container.scrollTop + "px";
  overlay.style.width = container.clientWidth + "px";
  overlay.style.left = container.scrollLeft + "px";

  const centeredTop = container.clientHeight / 2 + container.scrollTop;
  const centeredLeft = container.clientWidth / 2 + container.scrollLeft;
  loadingIndicator.style.top = `${centeredTop}px`;
  loadingIndicator.style.left = `${centeredLeft}px`;
}

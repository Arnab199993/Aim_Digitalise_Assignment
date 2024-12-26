export default class PagePath {
  label: string = "";
  to: string | undefined = undefined;
  Component?: any;
  showInNavbar: boolean;
  showSearchbar: boolean;
  constructor(
    Text: string,
    Path: string | undefined,
    Component: any,
    showInNavbar: boolean,
    showSearchbar: boolean
  ) {
    this.label = Text;
    this.to = Path;
    this.Component = Component;
    this.showInNavbar = showInNavbar;
    this.showSearchbar = showSearchbar;
  }
}

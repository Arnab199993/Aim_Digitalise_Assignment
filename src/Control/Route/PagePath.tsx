export default class PagePath {
    label: string = "";
    to: string | undefined = undefined;
    Component?: any;
    constructor(Text: string, Path: string | undefined, Component: any) {
      this.label = Text;
      this.to = Path;
      this.Component = Component;
    }
  }
  
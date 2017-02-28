export class SettingsService {

  private altBackground:boolean = false;

  isAltBackground(){
    return this.altBackground;
  }

  setBackground(isAlt:boolean){
    this.altBackground = isAlt;
  }

}

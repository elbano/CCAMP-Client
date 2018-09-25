/**
 * Utility Class
 */
export class Utility {

  // Note : Going forward if we still want to use multiple images we can move to sprites
  public static getRelativePathForAssets() {
    return  '../../assets/';
  }

  public static getThumbnailURLBySlideName(slideName): string {
    const path = this.getRelativePathForAssets();
    return path + slideName + '.qptiff-Thumbnail.jpg';
  }

  public static getLabelURLBySlideName(slideName): string {
    const path = this.getRelativePathForAssets();
    return path + slideName + '.qptiff-Label.jpg';
  }
}


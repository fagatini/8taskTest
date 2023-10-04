class slider {
  iterator = 0;
  photos = [];

  constructor(srcPhotos) {
    this.photos = srcPhotos;
  }

  next() {
    if (this.iterator < this.photos.length - 1) {
      this.iterator = this.iterator + 1;
      document.getElementById("slide").src = this.photos[this.iterator];
      this.checkButtons();
    }
  }

  prev() {
    if (this.iterator > 0) {
      this.iterator = this.iterator - 1;
      document.getElementById("slide").src = this.photos[this.iterator];
      this.checkButtons();
    }
  }

  setFirst() {
    this.iterator = 0;
    document.getElementById("slide").src = this.photos[0];
    this.checkButtons();
  }

  setLast() {
    this.iterator = this.photos.length - 1;
    document.getElementById("slide").src = this.photos[this.photos.length - 1];
    this.checkButtons();
  }

  checkButtons() {
    document.getElementById("next").disabled = !(this.iterator < this.photos.length - 1);
    document.getElementById("last").disabled = !(this.iterator < this.photos.length - 1);
    document.getElementById("prev").disabled = !(this.iterator > 0);
    document.getElementById("first").disabled = !(this.iterator > 0);
  }
}

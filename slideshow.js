var slideshow = {
	photoList: ["Munich_day_1", "Salzburg_day_2", "Neuschwannstein_day_3", "Prague_day_4"],
	currentPhotoIndex: 0	,
	nextPhoto: function () {
		if (this.currentPhotoIndex < this.photoList.length) {
			console.log(this.photoList[this.currentPhotoIndex]);
			this.currentPhotoIndex += 1;
		} else {
			console.log("End of slideshow");
		}
	},
	prevPhoto: function () {
		if (this.currentPhotoIndex > 0) {
			this.currentPhotoIndex -= 1;
			console.log(this.photoList[this.currentPhotoIndex]);
		} else {
			console.log("Beginning of slideshow");
		}
	}
}

function runSlideshow() {
	for (i = 0; i <= slideshow.photoList.length; i++) {
		slideshow.nextPhoto();
	}
	for (i = 0; i <= slideshow.photoList.length; i++) {
		slideshow.prevPhoto();
	}
}

runSlideshow();
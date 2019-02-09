var World = {
	loaded: false,
	rotating: false,
	initialized: false,

	init: function initFn() {
		this.createModelAtLocation();
		World.initialized =  true;
	},

	createModelAtLocation: function createModelAtLocationFn() {

		// if you keep the following line in, it will draw an orange triangle at the bottom right of the AR view. If you press it, the log window will appear.
		// Remove this line for production.
		AR.logger.activateDebugMode();

		AR.logger.info("createModelAtLocation called ...");

		/*
			First a location where the model should be displayed will be defined. This location will be relativ to the user.
		*/
		//var location = new AR.RelativeLocation(null, 5, 0, 2);
		//var location1 = new AR.RelativeLocation(null, 10, 0, -2);

		var i1 = new AR.RelativeLocation(null, -8, 2, 3);
		var i2 = new AR.RelativeLocation(null, -6, 3, 2);
		var i3 = new AR.RelativeLocation(null, -4, 5, 4);
		var i4 = new AR.RelativeLocation(null, -2, 6, 2);
		var i5 = new AR.RelativeLocation(null, -2, -3, 2);
		var i6 = new AR.RelativeLocation(null, -4, 6, 2);
		var i7 = new AR.RelativeLocation(null, -6, 9, 2);
		var i8 = new AR.RelativeLocation(null, -8, 3, 2);
		var i9 = new AR.RelativeLocation(null, -10, 5, 2);
		var i10 = new AR.RelativeLocation(null, -15, 7, 2);


		var i1Img = new AR.ImageResource("assets/i1.jpg");
		var i2Img = new AR.ImageResource("assets/i2.jpg");
		var i3Img = new AR.ImageResource("assets/i3.jpg");
		var i4Img = new AR.ImageResource("assets/i4.jpg");
		var i5Img = new AR.ImageResource("assets/i5.jpg");
		var i6Img = new AR.ImageResource("assets/i6.jpg");
		var i7Img = new AR.ImageResource("assets/i7.jpg");
		var i8Img = new AR.ImageResource("assets/i8.jpg");
		var i9Img = new AR.ImageResource("assets/i9.jpg");
		var i10Img = new AR.ImageResource("assets/i10.jpg");


		var indicatorImage = new AR.ImageResource("assets/indi.png");
		var indicatorDrawable = new AR.ImageDrawable(indicatorImage, 0.1, {
				verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP
		});

		var i1Drawable = new AR.ImageDrawable(i1Img, 1, {
				offsetX : 1,
				onClick : function() {
						// 'this' represents the ImageDrawable
						this.rotation += 10;
					}
		});

		var i2Drawable = new AR.ImageDrawable(i2Img, 1, {
				offsetX : 1,
				onClick : function() {
						// 'this' represents the ImageDrawable
						this.rotation += 10;
					}
		});

		var i3Drawable = new AR.ImageDrawable(i3Img, 1, {
				offsetX : 1,
				onClick : function() {
						// 'this' represents the ImageDrawable
						this.rotation += 10;
					}
		});
		var i4Drawable = new AR.ImageDrawable(i4Img, 1, {
				offsetX : 1,
				onClick : function() {
						// 'this' represents the ImageDrawable
						this.rotation += 10;
					}
		});
		var i5Drawable = new AR.ImageDrawable(i5Img, 1, {
				offsetX : 1,
				onClick : function() {
						// 'this' represents the ImageDrawable
						this.rotation += 10;
					}
		});
		var i6Drawable = new AR.ImageDrawable(i6Img, 1, {
				offsetX : 1,
				onClick : function() {
						// 'this' represents the ImageDrawable
						this.rotation += 10;
					}
		});
		var i7Drawable = new AR.ImageDrawable(i7Img, 1, {
				offsetX : 1,
				onClick : function() {
						// 'this' represents the ImageDrawable
						this.rotation += 10;
					}
		});
		var i8Drawable = new AR.ImageDrawable(i8Img, 1, {
				offsetX : 1,
				onClick : function() {
						// 'this' represents the ImageDrawable
						this.rotation += 10;
					}
		});
		var i9Drawable = new AR.ImageDrawable(i9Img, 1, {
				offsetX : 1,
				onClick : function() {
						// 'this' represents the ImageDrawable
						this.rotation += 10;
					}
		});

		var i10Drawable = new AR.ImageDrawable(i10Img, 1, {
				offsetX : 1,
				onClick : function() {
						// 'this' represents the ImageDrawable
						this.rotation += 10;
					}
		});




			var i1Obj = new AR.GeoObject(i1, {
							drawables: {
								 cam: [i1Drawable],
								 indicator: [indicatorDrawable]
							}
			});

			var i2Obj = new AR.GeoObject(i2, {
							drawables: {
								 cam: [i2Drawable],
								 indicator: [indicatorDrawable]
							}
			});
			var i3Obj = new AR.GeoObject(i3, {
							drawables: {
								 cam: [i3Drawable],
								 indicator: [indicatorDrawable]
							}
			});
			var i4Obj = new AR.GeoObject(i4, {
							drawables: {
								 cam: [i4Drawable],
								 indicator: [indicatorDrawable]
							}
			});
			var i5Obj = new AR.GeoObject(i5, {
							drawables: {
								 cam: [i5Drawable],
								 indicator: [indicatorDrawable]
							}
			});
			var i6Obj = new AR.GeoObject(i6, {
							drawables: {
								 cam: [i6Drawable],
								 indicator: [indicatorDrawable]
							}
			});
			var i7Obj = new AR.GeoObject(i7, {
							drawables: {
								 cam: [i7Drawable],
								 indicator: [indicatorDrawable]
							}
			});
			var i8Obj = new AR.GeoObject(i8, {
							drawables: {
								 cam: [i8Drawable],
								 indicator: [indicatorDrawable]
							}
			});
			var i9Obj = new AR.GeoObject(i9, {
							drawables: {
								 cam: [i9Drawable],
								 indicator: [indicatorDrawable]
							}
			});
			var i10Obj = new AR.GeoObject(i10, {
							drawables: {
								 cam: [i10Drawable],
								 indicator: [indicatorDrawable]
							}
			});






		//var location = new AR.GeoLocation(78.77317, 53.069929);

		/*
			Next the model object is loaded.
		*/
		var modelEarth = new AR.Model("assets/earth.wt3", {
			onLoaded: this.worldLoaded,
			scale: {
				x: 1,
				y: 1,
				z: 1
			}
		});




				var restaurantImage = new AR.ImageResource("assets/restaurant.png");
				var imageDrawable = new AR.ImageDrawable(restaurantImage, 5, {
						offsetX : 1,
						rotation : 190,
						onClick : function() {
								// 'this' represents the ImageDrawable
								this.rotation += 10;
							}
				});


		/*
			Putting it all together the location and 3D model is added to an AR.GeoObject.
		*/
		// var obj = new AR.GeoObject(location, {
    //         drawables: {
    //            cam: [modelEarth],
    //            indicator: [indicatorDrawable]
    //         }
    //     });
		//
		// var obj1 = new AR.GeoObject(location1, {
		// 				drawables: {
		// 					 cam: [imageDrawable],
		// 					 indicator: [indicatorDrawable]
		// 				}
		// });

	},

	/*
		This sample shows you how to use the function captureScreen to share a snapshot with your friends. C
		oncept of interaction between JavaScript and native code is same as in the POI Detail page sample but the urlListener now handles picture sharing instead.
		The "Snapshot"-button is on top right in the title bar.
		Once clicked the current screen is captured and user is prompted to share it (Handling of picture sharing is done in native code and cannot be done in JavaScript)
	*/
	captureScreen: function captureScreenFn() {
		AR.logger.info("captureScreen called ... World.initialized: "+World.initialized);

		if (World.initialized) {
			AR.platform.sendJSONObject({action: "captureScreen"});
		}
	},

	/**
	 * This is an example of a function called by IONIC --> WikitudePlugin
	 */
	testFunction: function testFunctionFn(message) {
		alert("testFunction called: "+message);
	},

	worldLoaded: function worldLoadedFn() {
		World.loaded = true;
		var e = document.getElementById('loadingMessage');
		e.parentElement.removeChild(e);
	}
};

World.init();

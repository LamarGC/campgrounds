var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104490f3c979a7e4b0bf_340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nulla sem. Donec viverra ac mauris quis fringilla. Morbi eleifend maximus augue, non aliquam ipsum pulvinar ut. Donec quis lacus diam. Aliquam faucibus imperdiet ligula, eu fermentum odio ullamcorper elementum. Aliquam odio ante, blandit quis tincidunt in, mattis a tortor. Aliquam erat volutpat. Proin vitae mollis nisi, nec convallis urna. Nulla facilisis id eros vel dapibus. Vestibulum metus est, blandit quis magna ut, lacinia suscipit dolor. Phasellus accumsan dui ac mauris semper egestas. Duis id purus faucibus, commodo leo nec, molestie nisi. Vivamus blandit facilisis risus, et commodo diam. Sed posuere justo at nulla tincidunt, sit amet elementum mauris suscipit. Fusce sit amet massa neque."
    },
    {
        name: "Desert Mesa",
        image: "https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144496f8c179aee8b2_340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nulla sem. Donec viverra ac mauris quis fringilla. Morbi eleifend maximus augue, non aliquam ipsum pulvinar ut. Donec quis lacus diam. Aliquam faucibus imperdiet ligula, eu fermentum odio ullamcorper elementum. Aliquam odio ante, blandit quis tincidunt in, mattis a tortor. Aliquam erat volutpat. Proin vitae mollis nisi, nec convallis urna. Nulla facilisis id eros vel dapibus. Vestibulum metus est, blandit quis magna ut, lacinia suscipit dolor. Phasellus accumsan dui ac mauris semper egestas. Duis id purus faucibus, commodo leo nec, molestie nisi. Vivamus blandit facilisis risus, et commodo diam. Sed posuere justo at nulla tincidunt, sit amet elementum mauris suscipit. Fusce sit amet massa neque."
    },
    {
        name: "Canyon Floor",
        image: "https://pixabay.com/get/e83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104490f3c979a7e4b0bf_340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nulla sem. Donec viverra ac mauris quis fringilla. Morbi eleifend maximus augue, non aliquam ipsum pulvinar ut. Donec quis lacus diam. Aliquam faucibus imperdiet ligula, eu fermentum odio ullamcorper elementum. Aliquam odio ante, blandit quis tincidunt in, mattis a tortor. Aliquam erat volutpat. Proin vitae mollis nisi, nec convallis urna. Nulla facilisis id eros vel dapibus. Vestibulum metus est, blandit quis magna ut, lacinia suscipit dolor. Phasellus accumsan dui ac mauris semper egestas. Duis id purus faucibus, commodo leo nec, molestie nisi. Vivamus blandit facilisis risus, et commodo diam. Sed posuere justo at nulla tincidunt, sit amet elementum mauris suscipit. Fusce sit amet massa neque."
    },
]

function seedDB(){
   Campground.remove({}, function(err){
       /*if(err){
           console.log(err);
       } 
        console.log("campgrounds deleted");
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                }  
                else{
                    console.log("added a campground");
                    Comment.create(
                        {
                            text:"this place is great but i wish there was internet",
                            author: "homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            }
                            else{
                             campground.comments.push(comment);
                             campground.save();
                             console.log("created new comment");
                            }
                        });
                }
            });
        }); */
   });
}

module.exports = seedDB;
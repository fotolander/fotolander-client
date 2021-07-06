import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-pictures',
  templateUrl: './upload-pictures.component.html',
  styleUrls: ['./upload-pictures.component.css']
})
export class UploadPicturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    cloudinary.openUploadWidget({
      cloudName: "demo", uploadPreset: "preset1",
      showCompletedButton: true,
    }, (error, result) => {
      if (!error && result.event === "show-completed") {
        result.info.items.forEach((item) => {
          console.log(`show completed for item with id:
      ${item.uploadInfo.public_id}`); //uploadInfo is the data returned in the upload response
        });
      }
    });
  }

}

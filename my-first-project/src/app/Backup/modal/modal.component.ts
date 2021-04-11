import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',

})



export class ModalComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  
  animal: string='';
  name: string='';


  ngOnInit(): void {

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalViewComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });


}

}


@Component({
  selector: 'modal-view',
  templateUrl: 'modal-view.html',
})
export class ModalViewComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
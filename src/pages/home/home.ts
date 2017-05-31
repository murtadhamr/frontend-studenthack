import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPostPage } from '../add-post/add-post';
import { CommentPage } from '../comment/comment'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {	
	
	avatar : string;
	nama : string;
	waktu : any;
	gambar : string;
	hashtag : any;
	id : any;


  public timeline = [{
	"avatar" : "http://s3.amazonaws.com/heroku-ldatschool/wp-content/uploads/2015/03/12194859/Young-student.jpg",
	"nama"	 : "William",
	"waktu"	 : "1 jam yang lalu",
	"gambar" : "http://www.victormichael.com/images/9a97eb608bc2f60676e4c65395e8f1f12f836d91.jpg",
	"hashtag": ["#okeoke","#okeoke"],
	"id"     : '1'
},
{
	"avatar" : "http://s3.amazonaws.com/heroku-ldatschool/wp-content/uploads/2015/03/12194859/Young-student.jpg",
	"nama"	 : "William",
	"waktu"	 : "1 jam yang lalu",
	"gambar" : "http://www.victormichael.com/images/9a97eb608bc2f60676e4c65395e8f1f12f836d91.jpg",
	"hashtag" : ["#okeoke","#okeoke"],
	"id"     : '2'
},
{
	"avatar" : "http://s3.amazonaws.com/heroku-ldatschool/wp-content/uploads/2015/03/12194859/Young-student.jpg",
	"nama"	 : "William",
	"waktu"	 : "1 jam yang lalu",
	"gambar" : "http://www.victormichael.com/images/9a97eb608bc2f60676e4c65395e8f1f12f836d91.jpg",
	"hashtag" : ["#okeoke","#okeoke"],
	"id"     : '3'
}

];

  public jumlah_like = 0;


  constructor(public navCtrl: NavController) {

  }



  tambahPosting(){
    this.navCtrl.push(AddPostPage);

  }

  likePosting(){
    this.jumlah_like ++;
  }

	lihatComment(){
		this.navCtrl.push(CommentPage);
	}
    

}


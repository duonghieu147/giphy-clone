import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BankCardComponent } from 'src/app/shared/components/bank-card/bank-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

  }

  handleRouting(route: any) {
    switch (route) {
      case 1:
        location.replace("https://www.facebook.com/hieu.duong.bku");
        break;
      case 2:
        location.replace("https://www.facebook.com/toitennhan2001");
        break;
      // case 3:
      //   location.replace("https://www.w3schools.com");
      //   break;
      case 4:
        // this.openDialogBankCard()
        location.replace("https://www.linkedin.com/in/duonghieubku/");

        break;
      case 5:
        // this.openDialogBankCard()
        location.replace("https://www.youtube.com/channel/UC0EVyFiwMAdBAmF4cau7sPA");

        break;
      case 6:
        this.router.navigate(['/gifs',])
        break;
      default: this.router.navigate(['/gifs',])
    }
  }

  openDialogBankCard() {
    this.dialog.open(BankCardComponent,{
      width:'400px'
    })
  }

}

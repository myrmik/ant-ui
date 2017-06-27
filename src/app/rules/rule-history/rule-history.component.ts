import {Component, Inject, OnInit, Optional} from "@angular/core";
import {NotificationService} from "../shared/notification.service";
import {Notification} from "../shared/notification";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";

@Component({
  selector: 'rule-history',
  templateUrl: './rule-history.component.html',
  styleUrls: ['./rule-history.component.css']
})
export class RuleHistoryComponent implements OnInit {
  ruleId: string;
  notifications: Notification[];

  ngOnInit(): void {
    this.getNotifications();
  }

  constructor(
    private notificationService: NotificationService,
    @Optional() @Inject(MD_DIALOG_DATA) private dialogData: any,
    public dialogRef: MdDialogRef<RuleHistoryComponent>
  ) {
    this.ruleId = dialogData.ruleId;
  }

  getNotifications(): void {
    this.notificationService.getNotifications(this.ruleId).then(notifications => this.notifications = notifications);
  }

}

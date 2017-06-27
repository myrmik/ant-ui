import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogConfig} from '@angular/material';
import {RuleService} from "./shared/rule.service";
import {Rule} from "./shared/rule";
import {RuleHistoryComponent} from "./rule-history/rule-history.component";

@Component({
  selector: 'rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  rules: Rule[];

  ngOnInit(): void {
    this.getRules();
  }

  constructor(
    private ruleService: RuleService,
    public dialog: MdDialog
  ) {}

  getRules(): void {
    this.ruleService.getRules().then(rules => this.rules = rules);
  }

  openHistoryDialog(ruleId) {
    const config = new MdDialogConfig();
    config.data = {ruleId: ruleId};
    this.dialog.open(RuleHistoryComponent, config);
  }

}

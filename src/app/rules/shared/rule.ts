import {RuleFilter} from "./rule-filter";

export class Rule {
  id: string;
  userId: string;
  sourceId: string;
  name: string;
  pubDate: Date;
  filters: RuleFilter[] = []
}

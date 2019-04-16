import { Target } from "./Target";
import { Researching } from "./Researching";
import { PendingApproval } from "./PendingApproval";
import { Approved } from "./Approved";
import { Declined } from "./Declined";

export class Status {
    target: Target
    researching: Researching
    pendingApproval: PendingApproval
    approved: Approved
    declined: Declined
}
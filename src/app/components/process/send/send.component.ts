import { Component, OnInit } from "@angular/core";
import { Gift } from "./models/gift";
import { MatDialog } from "@angular/material/dialog";
import { DialogPickSenderComponent } from "../../dialogs/dialog-pick-sender/dialog-pick-sender.component";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { GiftValue } from "./models/gift_value";
import { Pais } from "./models/pais";
import { DocType } from "./models/doc_type";
import { DialogSendConfirmationComponent } from "../../dialogs/dialog-send-confirmation/dialog-send-confirmation.component";
import { isNumber } from "util";
import { interval } from "rxjs";
import { compareAsc, format } from "date-fns";
import { SendGiftService } from "../../../services/send-gift.service";
import { GiftValueService } from "../../../services/gift-value.service";
import { PaisService } from "../../../services/pais.service";
import { DocTypeService } from "../../../services/doc-type.service";
import { NotificationService } from "../../../services/notification.service";
import { IGiftData } from "../../../models/Igift-data";
import { SendGift } from "../../../models/send-gift";

@Component({
  selector: "app-send",
  templateUrl: "./send.component.html",
  styleUrls: ["./send.component.scss"]
})
export class SendComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

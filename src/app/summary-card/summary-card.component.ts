import { Component, input } from "@angular/core";
import { Data } from "./summary-card.schema";

@Component({
    selector: "app-summary-card",
    standalone: true,
    imports: [],
    templateUrl: "./summary-card.component.html",
    styleUrl: "./summary-card.component.scss",
})
export class SummaryCardComponent {
    data = input.required<Data>();
}

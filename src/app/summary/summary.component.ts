import { Component } from "@angular/core";
import { Data } from "../summary-card/summary-card.schema";
import { SummaryCardComponent } from "../summary-card/summary-card.component";

@Component({
    selector: "app-summary",
    standalone: true,
    imports: [SummaryCardComponent],
    templateUrl: "./summary.component.html",
    styleUrl: "./summary.component.scss",
})
export class SummaryComponent {
    readonly summary: Data[] = [
        {
            accent: "hsl(0, 100%, 67%)",
            title: "Reaction",
            icon: "icon-reaction.svg",
            value: 80,
        },
        {
            accent: "hsl(39, 100%, 56%)",
            title: "Memory",
            icon: "icon-memory.svg",
            value: 92,
        },
        {
            accent: "hsl(166, 100%, 37%)",
            title: "Verbal",
            icon: "icon-verbal.svg",
            value: 61,
        },
        {
            accent: "hsl(234, 85%, 45%)",
            title: "Visual",
            icon: "icon-visual.svg",
            value: 72,
        },
    ];
}

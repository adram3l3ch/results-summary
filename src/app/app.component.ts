import { Component } from "@angular/core";
import { SummaryCardComponent } from "./summary-card/summary-card.component";
import { Data } from "./summary-card/summary-card.schema";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [SummaryCardComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
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
            value: 80,
        },
    ];
}

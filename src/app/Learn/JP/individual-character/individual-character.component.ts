import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-individual-character',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './individual-character.component.html',
  styleUrl: './individual-character.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndividualCharacterComponent implements OnInit {

  ngOnInit(): void { }

}

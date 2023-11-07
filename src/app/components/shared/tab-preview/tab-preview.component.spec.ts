import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPreviewComponent } from './tab-preview.component';

describe('TabPreviewComponent', () => {
  let component: TabPreviewComponent;
  let fixture: ComponentFixture<TabPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabPreviewComponent]
    });
    fixture = TestBed.createComponent(TabPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

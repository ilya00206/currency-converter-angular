import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencySelectComponent } from './currency-select.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

describe('CurrencySelectComponent', () => {
  let component: CurrencySelectComponent;
  let fixture: ComponentFixture<CurrencySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencySelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencySelectComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', 'test');
    fixture.componentRef.setInput('options', []);
    fixture.debugElement.injector.get(NG_VALUE_ACCESSOR);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register onChange function', () => {
    const onChangeFn = jasmine.createSpy('onChange');
    component.registerOnChange(onChangeFn);
    component.onChange('PLN');
    expect(onChangeFn).toHaveBeenCalledWith('PLN');
  });

  it('should register onTouched function', () => {
    const onTouchedFn = jasmine.createSpy('onTouched');
    component.registerOnTouched(onTouchedFn);
    component.onTouched();
    expect(onTouchedFn).toHaveBeenCalled();
  });

  it('should call onTouched on blur', () => {
    const onTouchedFn = jasmine.createSpy('onTouched');
    component.registerOnTouched(onTouchedFn);
    component.onBlur();
    expect(onTouchedFn).toHaveBeenCalled();
  });

  it('should write value', () => {
    component.writeValue('PLN');
    expect(component.value()).toBe('PLN');
  });

  it('should change value and call onChange', () => {
    const onChangeFn = jasmine.createSpy('onChange');
    component.registerOnChange(onChangeFn);
    component.valueChanged('PLN');
    expect(onChangeFn).toHaveBeenCalledWith('PLN');
    expect(component.value()).toBe('PLN');
  });
});

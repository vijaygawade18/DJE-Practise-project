import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it
} from '../../../../node_modules/angular2/testing.d';
import {Component} from '../../../../node_modules/angular2/core.d';
import {DOM} from '../../../../node_modules/angular2/src/platform/dom/dom_adapter.d';
import {AboutComponent} from './about.component.ts';

export function main() {
  describe('About component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let aboutDOMEl = rootTC.debugElement.children[0].nativeElement;

            expect(DOM.querySelectorAll(aboutDOMEl, 'h2')[0].textContent).toEqual('Features');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [AboutComponent],
  template: '<sd-about></sd-about>'
})
class TestComponent {}

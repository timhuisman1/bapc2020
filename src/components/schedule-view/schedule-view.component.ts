import { PageViewElement } from '@components/page-view-element';
import { customElement } from 'lit-element';

import styles from './schedule-view.styles';
import template from './schedule-view.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';

@customElement('schedule-view')
export class BapcView extends PageViewElement {
  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'schedule-view': BapcView;
  }
}

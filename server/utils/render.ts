
import { renderToString } from 'vue/server-renderer'
import type { AllowedComponentProps, Component, VNodeProps } from 'vue'
import { createSSRApp } from 'vue'
import { Options, cleanup } from '@vue-email/render'
import { createI18n } from 'vue-i18n'


export type ExtractComponentProps<TComponent> =
  TComponent extends new () => {
    $props: infer P
  }
  ? Omit<P, keyof VNodeProps | keyof AllowedComponentProps>
  : never

export interface VNode {
  type: string
  props: {
    style?: Record<string, any>
    children?: string | VNode | VNode[]
    [prop: string]: any
  }
}

export async function render<T extends Component>(
  component: T,
  props?: ExtractComponentProps<T>,
  options?: Options
) {

  const i18n = createI18n({
    legacy: false,
    globalInjection: false,
    locale: 'en',
    messages: {
      en: {
        hello: "Hello, {name}!"
      }
    }
  })


  const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'
  const App = createSSRApp(component, props || {})

  App.use(i18n)

  const markup = await renderToString(App)
  const doc = `${doctype}${cleanup(markup)}`


  return doc
}

/**
 * @interface ITabProps - Interface for the props of the Tab component.
 *
 * @props {string} currentTab - Current tab name that will be active
 * @props {string} customClass - Custom class for custom styling
 * @props {string} customCardClass - Custom class for custom card styling
 * @props {string} customActiveClass - Custom class for custom active card styling
 * @props {ITabLabeling} listDetails - array of objects containing tab details
 * @props {(event: React.SyntheticEvent<HTMLButtonElement>) => any} onChange - Function called when tab changes
 *
 * @interface ITabLabeling - Interface for object passed in array
 *
 * @props {string} name - Text displayed on tab
 * @props {string} count - Count displayed near tab name
 * @props {boolean} display - Hide or show tab
 * @props {string} keyWord - Used to pass value to tab when triggering the function
 * @props {number} key - key for tab
 * @props {string} color - Color of tab
 *
 */
export interface ITabLabeling {
  readonly name: string
  readonly count?: string | number
  readonly display: boolean
  readonly keyWord: string
  readonly key: number | string
  readonly color?: string
}
export interface ITabProps {
  readonly restrictedTabMode?: boolean
  readonly currentTab?: string
  readonly customClass?: string
  readonly customCardClass?: string
  readonly customActiveClass?: string
  readonly customCountClass?: string
  readonly listDetails?: ITabLabeling[]
  readonly onChange?: (index: number, name: string) => any
  readonly currentCount?: number | string
}

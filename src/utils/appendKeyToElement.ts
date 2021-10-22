import { cloneElement, isValidElement, ReactNode } from "react"

export function appendKeyToElement(element: ReactNode, key: string): ReactNode {
	if (isValidElement(element) && element.key === null) {
		return cloneElement(element, { key })
	}
	return element
}

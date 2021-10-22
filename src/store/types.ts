export type IState = {
    url: string,
    likeDel: Object | undefined,
    loading: boolean,
    errors: boolean
}

export type IAction = {
    type: string,
    url: string | undefined,
    likeDel: Object | undefined
}

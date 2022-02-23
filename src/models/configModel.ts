export interface ConfigModels {
    general: {
        name: string,
    },
    domain: {
        isDomain: boolean,
        domainName?: string,
        isAutoCorrectDomainName?: boolean
    },
    server: {
        port: number,
        ssl: boolean
    }
}

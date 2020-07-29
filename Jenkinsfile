@Library('libpipelines@master') _

hose {
    EMAIL = 'front'
    MODULE = 'lint'
    DEVTIMEOUT = 30
    RELEASETIMEOUT = 30
    REPOSITORY = 'github.com/stratio/st-lint'
    FOSS = true

    DEV = { config ->
        doCompile(config)
        doDeploy(config)
        doPackage(config)
    }
}
import DevelopmentEnvironment from './environment.development'
import ProductionEnvironment from './environment.production'


// TODO : Add checker for return valid environment
export default DevelopmentEnvironment 


export interface IEnvironment {
    runningModel: 'development' | 'production'
}
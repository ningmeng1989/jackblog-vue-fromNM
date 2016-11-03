/**
 * Created by JIANBO on 2016/11/3.
 */
import createLogger from 'vuex/logger'

export default process.env.Node_ENV!=='production'?[createLogger]:[];
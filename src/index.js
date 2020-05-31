import dva from 'dva';
import { createBrowserHistory } from 'history'

import './index.css';

// 1. Initialize
const app = dva({
    history: createBrowserHistory(),
    onError(e, dispatch) {
        console.log(e.message)
    }
});
window.app = app;

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/home').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
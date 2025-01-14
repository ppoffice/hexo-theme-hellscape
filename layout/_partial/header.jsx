const { Component } = require('inferno');

const { cacheComponent } = require('../util/cache');

class Header extends Component {
    render() {
        const { config, theme, url_for, search_form, __ } = this.props;

        return (
            <header id="header">
                <div id="banner"></div>
                <div id="header-outer" className="outer">
                    <div id="header-title" className="inner">
                        <h1 id="logo-wrap">
                            <a href={url_for()} id="logo">{config.title}</a>
                        </h1>
                        {theme.subtitle ? <h2 id="subtitle-wrap">
                            <a href={url_for()} id="subtitle">{theme.subtitle}</a>
                        </h2> : null}
                    </div>
                    <div id="header-inner" className="inner">
                        <nav id="main-nav">
                            <a id="main-nav-toggle" className="nav-icon"></a>
                            {Object.keys(theme.menu).map(i => {
                                return <a className="main-nav-link" href={url_for(theme.menu[i])}>{i}</a>
                            })}
                        </nav>
                        <nav id="sub-nav">
                            {theme.rss ? <a id="nav-rss-link" className="nav-icon" href={url_for(theme.rss)} title={__('rss_feed')}></a> : null}
                            <a id="nav-search-btn" className="nav-icon" title={__('search')}></a>
                        </nav>
                        <div id="search-form-wrap" dangerouslySetInnerHTML={{ __html: search_form({ button: '&#xF002;' }) }}>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

module.exports = cacheComponent(Header, props => {
    const { relative_link } = props.config;
    if (!relative_link) {
        return 'header';
    }
    return null;
});
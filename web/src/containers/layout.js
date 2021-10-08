/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import MainNav from '../components/MainNav';
import MainFooter from '../components/MainFooter';

const MyLayout = ({ children }) => (
  <>
    <Helmet>
      {/* <script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/a52e312b51133205942a4eb7/script.js"
      /> */}
      <script
        rel="preload"
        src="https://kit.fontawesome.com/e4a269ffa7.js"
        crossOrigin="anonymous"
        async
      />
      <script>
        {`(function(d) {
      var config = {
        kitId: 'vjz1tay',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);`}
      </script>
      {/* <link rel="dns-prefetch" href="//ajax.googleapis.com" /> */}
      <link rel="dns-prefetch" href="//use.fontawesome.com" />
      {/* <link rel="dns-prefetch" href="//s7.addthis.com" /> */}
      {/* <link rel="dns-prefetch" href="//s.w.org" /> */}
      {/* <link
        rel="stylesheet"
        id="wp-block-library-css"
        href="https://techboomers.com/wp-includes/css/dist/block-library/style.min.css?ver=5.8.1"
        type="text/css"
        media="all"
      /> */}
      {/* <link
        rel="stylesheet"
        id="arve-main-css"
        href="https://techboomers.com/wp-content/plugins/advanced-responsive-video-embedder/build/main.css?ver=8d9041dffdd559096a49d6ed127521cd"
        type="text/css"
        media="all"
      /> */}
      {/* <link
        rel="stylesheet"
        id="mailerlite_forms.css-css"
        href="https://techboomers.com/wp-content/plugins/official-mailerlite-sign-up-forms/assets/css/mailerlite_forms.css?ver=1.4.9"
        type="text/css"
        media="all"
      /> */}
      {/* <link
        rel="stylesheet"
        id="main-stylesheet-css"
        href="https://techboomers.com/wp-content/themes/TechBoomers2018/dist/assets/css/app.css?ver=2.10.63"
        type="text/css"
        media="all"
      /> */}
      {/* <link
        rel="stylesheet"
        id="dry_awp_theme_style-css"
        href="https://techboomers.com/wp-content/plugins/advanced-wp-columns/assets/css/awp-columns.css?ver=5.8.1"
        type="text/css"
        media="all"
      /> */}
      {/* <style id="dry_awp_theme_style-inline-css" type="text/css">
        {`@media screen and (max-width: 1024px) {	.csColumn {		clear: both !important;		float: none !important;		text-align: center !important;		margin-left:  10% !important;		margin-right: 10% !important;		width: 80% !important;	}	.csColumnGap {		display: none !important;	}}`}
      </style> */}
      {/* <script
        type="text/javascript"
        src="https://techboomers.com/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.7"
        id="regenerator-runtime-js"
      /> */}
      {/* <script
        type="text/javascript"
        src="https://techboomers.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0"
        id="wp-polyfill-js"
      /> */}
      {/* <script
        async="async"
        type="text/javascript"
        src="https://techboomers.com/wp-content/plugins/advanced-responsive-video-embedder/build/main.js?ver=8d9041dffdd559096a49d6ed127521cd"
        id="arve-main-js"
      /> */}
      {/* <script
        type="text/javascript"
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js?ver=3.2.1"
        id="jquery-js"
      /> */}
      {/* <link rel="https://api.w.org/" href="https://techboomers.com/wp-json/" /> */}
      {/* <script>
        {`(function (m, a, i, l, e, r) {
            m['MailerLiteObject'] = e;

            function f() {
                var c = {a: arguments, q: []};
                var r = this.push(c);
                return "number" != typeof r ? r : f.bind(c.q);
            }

            f.q = f.q || [];
            m[e] = m[e] || f.bind(f.q);
            m[e].q = m[e].q || f.q;
            r = a.createElement(i);
            var _ = a.getElementsByTagName(i)[0];
            r.async = 1;
            r.src = l + '?' + (~~(new Date().getTime() / 10000000));
            _.parentNode.insertBefore(r, _);
        })(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');

        var ml_account = ml('accounts', '1189000', 'd9e7q7w2t8', 'load');`}
      </script> */}
    </Helmet>
    <MainNav />
    <>{children}</>
    <MainFooter />
  </>
);

export default function Layout(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          footer: sanityNavMenu(type: { eq: "mainFooter" }) {
            type
          }
          mainNav: sanityNavMenu(type: { eq: "mainNav" }) {
            type
          }
        }
      `}
      render={(data) => <MyLayout data={data} {...props} />}
    />
  );
}

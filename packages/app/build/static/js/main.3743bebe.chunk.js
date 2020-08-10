(this['webpackJsonpexample-app'] = this['webpackJsonpexample-app'] || []).push([
  [0],
  {
    193: function (e, t, a) {
      e.exports = a(324);
    },
    324: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = {};
      a.r(n),
        a.d(n, 'HomePagePlugin', function () {
          return xn;
        }),
        a.d(n, 'WelcomePlugin', function () {
          return In;
        }),
        a.d(n, 'LighthousePlugin', function () {
          return Er;
        }),
        a.d(n, 'InventoryPlugin', function () {
          return kr;
        }),
        a.d(n, 'ScaffolderPlugin', function () {
          return xr;
        }),
        a.d(n, 'TechRadar', function () {
          return Xr;
        }),
        a.d(n, 'Explore', function () {
          return ci;
        }),
        a.d(n, 'Services', function () {
          return ji;
        });
      var r = a(0),
        i = a.n(r),
        o = a(15),
        l = a.n(o),
        c = a(11),
        s = a(61),
        u = a(400),
        d = a(401),
        m = a(16),
        h = a(29),
        p = a(180),
        f = a(118),
        g = a(107),
        b = a(367),
        E = a(368);
      function v(e) {
        var t = (function (e) {
            return {
              palette: e,
              props: {
                MuiGrid: { spacing: 2 },
                MuiSwitch: { color: 'primary' },
              },
              typography: {
                fontFamily:
                  '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
                h5: { fontWeight: 700 },
                h4: { fontWeight: 700, fontSize: 28, marginBottom: 6 },
                h3: { fontSize: 32, fontWeight: 700, marginBottom: 6 },
                h2: { fontSize: 40, fontWeight: 700, marginBottom: 8 },
                h1: { fontSize: 54, fontWeight: 700, marginBottom: 10 },
              },
            };
          })(e),
          a = Object(p.a)(t),
          n = (function (e) {
            return {
              MuiCssBaseline: {
                '@global': {
                  html: { height: '100%', fontFamily: e.typography.fontFamily },
                  body: {
                    height: '100%',
                    fontFamily: e.typography.fontFamily,
                    'overscroll-behavior-y': 'none',
                  },
                  a: { color: 'inherit', textDecoration: 'none' },
                },
              },
              MuiTableRow: {
                root: {
                  '&:nth-of-type(odd)': {
                    backgroundColor: e.palette.background.default,
                  },
                },
                hover: { '&:hover': { cursor: 'pointer' } },
                head: {
                  '&:nth-of-type(odd)': {
                    backgroundColor: e.palette.background.paper,
                  },
                },
              },
              MuiTableCell: {
                root: {
                  wordBreak: 'break-word',
                  overflow: 'hidden',
                  verticalAlign: 'middle',
                  lineHeight: '1',
                  margin: 0,
                  padding: '8px',
                  borderBottom: 0,
                },
                head: {
                  wordBreak: 'break-word',
                  overflow: 'hidden',
                  color: 'rgb(179, 179, 179)',
                  fontWeight: 'normal',
                  lineHeight: '1',
                },
              },
              MuiTabs: { root: { minHeight: 24 } },
              MuiTab: {
                root: Object(h.a)(
                  {
                    color: e.palette.link,
                    minHeight: 24,
                    textTransform: 'initial',
                    '&:hover': {
                      color: Object(f.darken)(e.palette.link, 0.3),
                      background: Object(f.lighten)(e.palette.link, 0.95),
                    },
                  },
                  e.breakpoints.up('md'),
                  {
                    minWidth: 120,
                    fontSize: e.typography.pxToRem(14),
                    fontWeight: 500,
                  },
                ),
                textColorPrimary: { color: e.palette.link },
              },
              MuiTableSortLabel: {
                root: {
                  color: 'inherit',
                  '&:hover': { color: 'inherit' },
                  '&:focus': { color: 'inherit' },
                },
                active: { fontWeight: 'bold', color: 'inherit' },
              },
              MuiListItemText: {
                dense: {
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                },
              },
              MuiButton: { text: { padding: void 0 } },
              MuiChip: {
                root: { marginRight: e.spacing(1), marginBottom: e.spacing(1) },
              },
              MuiCardHeader: { root: { paddingBottom: 0 } },
              MuiCardActions: { root: { justifyContent: 'flex-end' } },
            };
          })(a);
        return Object(m.a)({}, a, { overrides: n });
      }
      v({
        type: 'light',
        background: { default: '#F8F8F8' },
        status: {
          ok: '#1db855',
          warning: '#f49b20',
          error: '#CA001B',
          running: '#BEBEBE',
          pending: '#5BC0DE',
          background: '#F8F8F8',
        },
        bursts: {
          fontColor: '#FEFEFE',
          slackChannelText: '#ddd',
          backgroundColor: { default: '#7C3699' },
        },
        primary: { main: g.a[500] },
        border: '#E6E6E6',
        textContrast: '#000000',
        textVerySubtle: '#DDD',
        textSubtle: '#6E6E6E',
        highlight: '#FFFBCC',
        errorBackground: '#FFEBEE',
        warningBackground: '#F59B23',
        infoBackground: '#ebf5ff',
        errorText: '#CA001B',
        infoText: '#004e8a',
        warningText: '#FEFEFE',
        linkHover: '#2196F3',
        link: '#0A6EBE',
        gold: b.a.A700,
        sidebar: '#171717',
      }),
        v({
          type: 'dark',
          background: { default: '#282828' },
          status: {
            ok: '#1db855',
            warning: '#f49b20',
            error: '#CA001B',
            running: '#BEBEBE',
            pending: '#5BC0DE',
            background: '#282828',
          },
          bursts: {
            fontColor: '#FEFEFE',
            slackChannelText: '#ddd',
            backgroundColor: { default: '#7C3699' },
          },
          primary: { main: g.a[500] },
          border: '#E6E6E6',
          textContrast: '#FFFFFF',
          textVerySubtle: '#DDD',
          textSubtle: '#6E6E6E',
          highlight: '#FFFBCC',
          errorBackground: '#FFEBEE',
          warningBackground: '#F59B23',
          infoBackground: '#ebf5ff',
          errorText: '#CA001B',
          infoText: '#004e8a',
          warningText: '#FEFEFE',
          linkHover: '#2196F3',
          link: '#0A6EBE',
          gold: b.a.A700,
          sidebar: '#424242',
        });
      var y,
        k = v({
          type: 'light',
          background: { default: '#F8F8F8' },
          status: {
            ok: '#1db855',
            warning: '#f49b20',
            error: '#CA001B',
            running: '#BEBEBE',
            pending: '#5BC0DE',
            background: '#F8F8F8',
          },
          bursts: {
            fontColor: '#FEFEFE',
            slackChannelText: '#ddd',
            backgroundColor: { default: '#7C3699' },
          },
          primary: { main: E.a[500] },
          border: '#E6E6E6',
          textContrast: '#000000',
          textVerySubtle: '#DDD',
          textSubtle: '#6E6E6E',
          highlight: '#FFFBCC',
          errorBackground: '#FFEBEE',
          warningBackground: '#F59B23',
          infoBackground: '#ebf5ff',
          errorText: '#CA001B',
          infoText: '#004e8a',
          warningText: '#FEFEFE',
          linkHover: '#2196F3',
          link: '#0A6EBE',
          gold: b.a.A700,
          sidebar: '#171717',
        }),
        O = v({
          type: 'dark',
          background: { default: 'rgb(38, 36, 38)' },
          status: {
            ok: '#1db855',
            warning: '#f49b20',
            error: '#CA001B',
            running: '#BEBEBE',
            pending: '#5BC0DE',
            background: 'rgb(38, 36, 38)',
          },
          bursts: {
            fontColor: '#FEFEFE',
            slackChannelText: '#ddd',
            backgroundColor: { default: '#7C3699' },
          },
          primary: { main: E.a[500] },
          border: '#E6E6E6',
          textContrast: '#FFFFFF',
          textVerySubtle: '#DDD',
          textSubtle: '#6E6E6E',
          highlight: '#FFFBCC',
          errorBackground: '#FFEBEE',
          warningBackground: '#F59B23',
          infoBackground: '#ebf5ff',
          errorText: '#CA001B',
          infoText: '#004e8a',
          warningText: '#FEFEFE',
          linkHover: '#2196F3',
          link: '#0A6EBE',
          gold: b.a.A700,
          sidebar: '#424242',
        }),
        w = a(97),
        x = a(40),
        C = a(69),
        j = a(89),
        S = a(78),
        F = a(36),
        R = a(35),
        T = a(83),
        B = a(17),
        L = a(18),
        A = a(60),
        N = a(369),
        M = a(371),
        I = a(54),
        q = a(373),
        D = a(410),
        W = a(376),
        P = a(327),
        H = a(377),
        z = a(378),
        U = a(6),
        _ = a(379),
        G = a(380),
        Z = a(381),
        Y = a(382),
        V = a(383),
        J = a(402),
        Q = a(384),
        X = a(404),
        $ = a(385),
        K = a(181),
        ee = a(386),
        te = a(37),
        ae = a(387),
        ne = (a(412), a(388), a(408), a(413), a(406)),
        re = a(389),
        ie = a(390),
        oe = a(391),
        le = (a(414), a(392), a(393)),
        ce = a(394),
        se = (a(395), a(156)),
        ue = a.n(se),
        de = a(155),
        me = a.n(de),
        he = a(2),
        pe = a.n(he),
        fe = a(411),
        ge = a(119),
        be = a.n(ge),
        Ee = a(33),
        ve = a.n(Ee),
        ye = a(158),
        ke = a.n(ye),
        Oe = a(403),
        we = a(4),
        xe = a(160),
        Ce = a.n(xe),
        je = a(161),
        Se = a.n(je),
        Fe = a(128),
        Re = (a(162), a(124)),
        Te = a.n(Re),
        Be = a(163),
        Le = a.n(Be),
        Ae = a(120),
        Ne = a.n(Ae),
        Me = a(121),
        Ie =
          (a(164),
          (function () {
            function e(t) {
              if (
                (Object(B.a)(this, e),
                (this.config = t),
                !t.id.match(/^[a-z][a-z0-9]*(\.[a-z][a-z0-9]*)*$/))
              )
                throw new Error(
                  "API id must only contain lowercase alphanums separated by dots, got '".concat(
                    t.id,
                    "'",
                  ),
                );
            }
            return (
              Object(L.a)(e, [
                {
                  key: 'toString',
                  value: function () {
                    return 'apiRef{'.concat(this.config.id, '}');
                  },
                },
                {
                  key: 'id',
                  get: function () {
                    return this.config.id;
                  },
                },
                {
                  key: 'description',
                  get: function () {
                    return this.config.description;
                  },
                },
                {
                  key: 'T',
                  get: function () {
                    throw new Error('tried to read ApiRef.T of '.concat(this));
                  },
                },
              ]),
              e
            );
          })()),
        qe = Object(r.createContext)(void 0),
        De = function (e) {
          var t = e.app,
            a = e.children;
          return i.a.createElement(qe.Provider, { value: t, children: a });
        };
      !(function (e) {
        (e[(e.Off = 0)] = 'Off'), (e[(e.On = 1)] = 'On');
      })(y || (y = {}));
      var We = new Ie({
          id: 'core.featureflags',
          description:
            'Used to toggle functionality in features across Backstage',
        }),
        Pe = Object(N.a)({
          micDrop: {
            maxWidth: '60%',
            bottom: 10,
            right: 10,
            position: 'absolute',
          },
        }),
        He = function () {
          var e = Pe();
          return i.a.createElement(
            'svg',
            {
              className: e.micDrop,
              width: '765',
              height: '549',
              viewBox: '0 0 765 549',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            i.a.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M233.254 18.1123C287.613 12.9406 348.953 -19.7941 390.737 17.9035C433.262 56.2682 419.83 127.396 420.495 187.038C421.173 247.834 429.724 312.626 394.555 360.272C356.272 412.137 294.782 444.433 233.254 440.709C174.088 437.128 130.793 387.084 89.1619 341.79C47.9247 296.924 -2.50454 250.018 0.0966297 187.038C2.64988 125.217 53.6362 80.0377 101.402 45.4309C139.977 17.4827 186.903 22.5221 233.254 18.1123Z',
              fill: '#9BF0E1',
            }),
            i.a.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M513.385 20.4439C566.693 14.8938 613.809 62.3867 650.746 106.814C683.285 145.952 687.847 201.929 705.832 251.918C725.902 307.696 777.756 358.692 762.097 416.298C746.456 473.841 682.485 490.291 634.414 514.658C595.842 534.21 555.492 539.703 513.385 542.369C468.505 545.211 418.55 561.006 382.241 530.624C345.943 500.251 351.456 437.745 332.509 391.022C309.653 334.66 245.906 289.233 260.017 229.218C273.979 169.835 349.469 169.535 393.023 133.647C436.218 98.0537 460.413 25.959 513.385 20.4439Z',
              fill: '#69DDC7',
            }),
            i.a.createElement('path', {
              d:
                'M584.384 331.262L618.437 362.37C620.096 363.886 622.677 363.738 624.152 362.042L625.747 360.209C627.216 358.521 627.014 355.956 625.299 354.519L590.183 325.076C589.459 324.469 588.534 324.093 587.606 324.266C584.444 324.854 583.314 327.325 583.371 329.355C583.392 330.105 583.83 330.756 584.384 331.262Z',
              fill: 'black',
              stroke: 'black',
            }),
            i.a.createElement('circle', {
              cx: '630.54',
              cy: '366.006',
              r: '11.6617',
              transform: 'rotate(131.021 630.54 366.006)',
              fill: '#616161',
            }),
            i.a.createElement('rect', {
              x: '639.69',
              y: '357.103',
              width: '25.4436',
              height: '3.18045',
              rx: '1.59023',
              transform: 'rotate(131.021 639.69 357.103)',
              fill: '#282828',
            }),
            i.a.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M331.081 60.2902C334.528 72.9923 339.02 101.544 334.436 106.022H305.436C305.433 105.971 305.43 105.92 305.427 105.868C294.679 104.679 286.319 95.5658 286.319 84.5V63.5C286.319 51.6259 295.945 42 307.819 42H309.819C320.602 42 329.531 49.9385 331.081 60.2902Z',
              fill: '#181818',
            }),
            i.a.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M297.581 80.4901C292.973 75.0814 289.854 68.4529 290.376 61.0255C291.877 39.625 321.667 44.3328 327.462 55.1339C333.257 65.9351 332.568 93.333 325.079 95.2635C322.092 96.0333 315.73 94.1475 309.254 90.2443L313.319 119H289.319L297.581 80.4901Z',
              fill: '#EDB795',
            }),
            i.a.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M304.069 76.8748C305.175 88.7528 304.732 102.317 301.436 105.537H272.436C270.82 77.4635 286.436 88.3349 286.436 61.9028C287.41 60.9515 288.33 60.01 289.24 59.1981L289.208 58.4207C294.229 48.1402 300.6 43 308.32 43C319.9 43 323.555 48.3883 326.668 52.9631C324.34 60.9482 315.309 62.1322 307.285 67.1095C306.339 66.341 305.133 65.8804 303.819 65.8804C300.781 65.8804 298.319 68.3428 298.319 71.3804C298.319 74.418 300.781 76.8804 303.819 76.8804C303.903 76.8804 303.986 76.8785 304.069 76.8748Z',
              fill: '#181818',
            }),
            i.a.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M250.727 300.088C274.716 306.798 295.413 310.153 312.818 310.153C330.224 310.153 346.39 304.986 361.319 294.653C337.843 287.766 318.51 284.323 303.319 284.323C288.128 284.323 270.597 289.578 250.727 300.088Z',
              fill: '#C52B86',
            }),
            i.a.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M333.586 319.824C333.354 319.477 333.159 319.098 333.004 318.689C329.797 310.208 278.436 218.726 273.319 202H331.145C335.035 214.717 352.546 294.52 355.01 310.442C362.785 335.557 378.794 416.895 380.838 422.53C382.988 428.458 370.891 434.633 367.668 427.346C362.539 415.75 350.317 383.665 344.876 364.074C339.775 345.708 335.621 329.184 333.586 319.824Z',
              fill: '#E7B291',
            }),
            i.a.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M286.276 330.994C262.794 336.928 176.903 347.658 171.009 349.341C164.945 351.072 159.629 338.574 167.124 335.867C179.049 331.559 211.908 321.606 231.831 317.544C247.855 314.277 262.478 311.611 272.295 310.05C271.464 282.473 267.662 216.294 270.154 202H321.319C318.929 215.707 298.729 315.718 294.975 325.729C293.783 329.302 290.228 330.882 286.276 330.994Z',
              fill: '#EDB795',
            }),
            i.a.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M167.668 332.539C164.532 331.956 162.235 331.793 160.774 332.05C158.998 332.363 156.459 333.116 153.156 334.309C153.52 336.369 156.784 354.884 162.951 389.854C167.977 390.456 170.406 389.168 170.238 385.991C170.07 382.814 169.959 380.17 169.902 378.059L176.859 350.213C176.993 349.677 176.667 349.134 176.132 349C176.123 348.998 176.113 348.996 176.104 348.994L171.786 348.044C169.935 345.402 168.851 343.181 168.534 341.381C168.276 339.919 168.51 337.795 169.237 335.01L169.237 335.01C169.516 333.941 168.876 332.849 167.807 332.57C167.761 332.558 167.714 332.548 167.668 332.539Z',
              fill: 'white',
            }),
            i.a.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M363.997 426.402C362.878 429.388 362.319 431.623 362.319 433.106C362.319 434.909 362.619 437.54 363.22 441C365.312 441 384.113 441 419.622 441C421.088 436.155 420.242 433.539 417.084 433.152C413.926 432.766 411.303 432.417 409.214 432.106L382.999 420.419C382.494 420.194 381.903 420.421 381.678 420.925C381.674 420.934 381.671 420.942 381.667 420.951L379.982 425.039C377.059 426.403 374.683 427.085 372.856 427.085C371.371 427.085 369.32 426.485 366.703 425.286L366.703 425.285C365.699 424.825 364.512 425.266 364.052 426.27C364.032 426.313 364.014 426.357 363.997 426.402Z',
              fill: 'white',
            }),
            i.a.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M270.319 202C292.866 195.549 314.199 195.549 334.319 202C341.319 233.937 358.328 246.613 361.319 295.579C327.319 312.473 285.319 283.53 250.319 300.005C240.319 276.961 254.319 221.464 270.319 202Z',
              fill: '#F038A5',
            }),
            i.a.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M367.319 162.311L406.802 156.925C414.7 152.532 421.966 149.558 428.599 148.003C430.466 147.948 433.436 148.627 429.012 152.315C424.588 156.003 420.099 160.083 420.887 162.051C421.675 164.02 425.79 163.287 426.471 166.315C426.926 168.333 420.248 168.661 406.44 167.299L374.403 180L367.319 162.311ZM243.288 171.45L265.186 171.532C241.175 225.566 228.655 253.857 227.627 256.406C225.313 262.14 230.209 270.874 232.303 275.567C225.483 278.619 226.21 267.317 217.607 271.319C209.754 274.973 203.78 281.592 194.708 275.994C193.592 275.306 192.37 272.715 195.323 270.69C202.681 265.645 213.284 256.815 214.717 253.908C216.67 249.945 226.194 222.459 243.288 171.45Z',
              fill: '#EDB795',
            }),
            i.a.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M303.268 102L320.413 103.142C324.635 141.343 347.635 165.473 399.13 157.304L405.971 206.499C357.841 212.719 315.632 193.45 306.981 141.278C304.742 127.773 302.973 113.718 303.268 102Z',
              fill: '#EEEEEE',
            }),
            i.a.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M294.809 97.0159L320.786 102.965C320.786 147.644 335.019 176.15 342.319 209H272.162C271.174 220.351 270.567 232.018 270.251 244H217.72C229.624 180.664 254.749 131.664 293.094 97H294.796L294.809 97.0159Z',
              fill: 'white',
            }),
            i.a.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M283.231 145.259C281.423 173.101 282.486 194.347 286.421 209H272.162C274.12 186.514 277.575 165.267 283.231 145.259V145.259Z',
              fill: '#EEEEEE',
            }),
            i.a.createElement('path', {
              d:
                'M420 184C438.174 208.939 473.047 287.772 467.144 403.592C469.74 373.957 481.656 315.366 508.548 318.087C535.441 320.808 531.505 401.163 526.176 441C532.052 385.292 552.334 355.087 573.5 351',
              stroke: '#F9F9F9',
              strokeWidth: '4',
              strokeLinecap: 'round',
              strokeDasharray: '10 15',
            }),
          );
        },
        ze = Object(N.a)(function (e) {
          return {
            container: { padding: e.spacing(8) },
            title: { paddingBottom: e.spacing(5) },
            subtitle: { color: e.palette.textSubtle },
          };
        }),
        Ue = function (e) {
          var t = e.status,
            a = e.statusMessage,
            n = e.history,
            r = ze();
          return i.a.createElement(
            M.a,
            { container: !0, className: r.container },
            i.a.createElement(He, null),
            i.a.createElement(
              M.a,
              { item: !0, xs: 12, sm: 4 },
              i.a.createElement(
                I.a,
                { variant: 'body1', className: r.subtitle },
                'ERROR ',
                t,
                ': ',
                a,
              ),
              i.a.createElement(
                I.a,
                { variant: 'h2', className: r.title },
                'Looks like someone dropped the mic!',
              ),
              i.a.createElement(
                I.a,
                { variant: 'h6' },
                i.a.createElement(
                  q.a,
                  { 'data-testid': 'go-back-link', onClick: n.goBack },
                  'Go back',
                ),
                '... or if you think this is a bug, please file an',
                ' ',
                i.a.createElement(
                  q.a,
                  { href: 'https://github.com/spotify/backstage/issues' },
                  'issue.',
                ),
              ),
            ),
          );
        },
        _e = { user: me.a, group: ue.a },
        Ge = Object(r.createContext)(void 0),
        Ze = function (e) {
          var t = e.apis,
            a = e.children;
          return i.a.createElement(Ge.Provider, { value: t, children: a });
        };
      function Ye(e) {
        var t = Object(r.useContext)(Ge);
        if (!t) throw new Error('No ApiProvider available in react context');
        var a = t.get(e);
        if (!a) throw new Error('No implementation available for '.concat(e));
        return a;
      }
      Ze.propTypes = {
        apis: pe.a.shape({ get: pe.a.func.isRequired }).isRequired,
        children: pe.a.node,
      };
      var Ve = (function () {
          function e() {
            Object(B.a)(this, e), (this.apis = []);
          }
          return (
            Object(L.a)(e, [
              {
                key: 'add',
                value: function (e, t) {
                  return this.apis.push([e, t]), t;
                },
              },
              {
                key: 'build',
                value: function () {
                  return new Je(new Map(this.apis));
                },
              },
            ]),
            e
          );
        })(),
        Je = (function () {
          function e(t) {
            Object(B.a)(this, e), (this.apis = t);
          }
          return (
            Object(L.a)(
              e,
              [
                {
                  key: 'get',
                  value: function (e) {
                    return this.apis.get(e);
                  },
                },
              ],
              [
                {
                  key: 'builder',
                  value: function () {
                    return new Ve();
                  },
                },
                {
                  key: 'from',
                  value: function (t) {
                    return new e(new Map(t));
                  },
                },
              ],
            ),
            e
          );
        })();
      var Qe,
        Xe = new Ie({
          id: 'core.alert',
          description: 'Used to report alerts and forward them to the app',
        }),
        $e = new Ie({
          id: 'core.error',
          description: 'Used to report errors and forward them to the app',
        }),
        Ke = (function () {
          function e() {
            Object(B.a)(this, e), (this.subscribers = new Set());
          }
          return (
            Object(L.a)(e, [
              {
                key: 'post',
                value: function (e) {
                  this.subscribers.forEach(function (t) {
                    return t(e);
                  });
                },
              },
              {
                key: 'subscribe',
                value: function (e) {
                  var t = this;
                  return (
                    this.subscribers.add(e),
                    function () {
                      t.subscribers.delete(e);
                    }
                  );
                },
              },
            ]),
            e
          );
        })(),
        et = (function () {
          function e(t) {
            Object(B.a)(this, e),
              (this.subscribers = new Set()),
              (this.alertApi = t);
          }
          return (
            Object(L.a)(e, [
              {
                key: 'post',
                value: function (e, t) {
                  (null === t || void 0 === t ? void 0 : t.hidden) ||
                    (this.alertApi.post({
                      message: e.message,
                      severity: 'error',
                    }),
                    this.subscribers.forEach(function (t) {
                      return t(e);
                    }));
                },
              },
              {
                key: 'subscribe',
                value: function (e) {
                  var t = this;
                  return (
                    this.subscribers.add(e),
                    function () {
                      t.subscribers.delete(e);
                    }
                  );
                },
              },
            ]),
            e
          );
        })(),
        tt = {
          blue: { colors: ['#2D46B9', '#509BF5'] },
          darkBlue: { colors: ['#1E3264', '#A0C3D2'] },
          brown: { colors: ['#674638', '#C39887'] },
          green: { colors: ['#1DB954', '#006350'] },
          orangeYellow: { colors: ['#FF6437', '#FFC864'] },
          redOrange: { colors: ['#A72525', '#E6542D'] },
          pinkOrange: { colors: ['#F13DA2', '#FF8A48'] },
          purpleBlue: { colors: ['#2D00AA', '#C769B5'] },
          tealGreen: { colors: ['#19E68C', '#1D7F6E'] },
          violetPeach: { colors: ['#B39AC8', '#FCCBD3'] },
          violetGreen: { colors: ['#4302F4', '#C3EFC8'] },
          purple: { colors: ['#a186bd', '#7c5c92'] },
          eveningSea: { colors: ['#00FFF2', '#035355'] },
          royalBlue: { colors: ['#000044', '#4B80D4'] },
          grey: { colors: ['#111111', '#777777'] },
          sunset: { colors: ['#cf8022', '#4e6ec7'] },
          sky: { colors: ['#69B9FF', '#ACCEEC'] },
          teal: { colors: ['#005E4D', '#9BF0E1'] },
        },
        at = {
          home: { gradient: tt.purpleBlue },
          documentation: { gradient: tt.purpleBlue },
          tool: { gradient: tt.purpleBlue },
        },
        nt = i.a.createContext(at.home),
        rt = Object(N.a)(function () {
          return {
            root: {
              display: 'grid',
              gridTemplateAreas:
                "'pageHeader pageHeader pageHeader' 'pageSubheader pageSubheader pageSubheader' 'pageNav pageContent pageSidebar'",
              gridTemplateRows: 'auto auto 1fr',
              gridTemplateColumns: 'auto 1fr auto',
              minHeight: '100vh',
            },
          };
        }),
        it = function (e) {
          var t = e.theme,
            a = void 0 === t ? at.home : t,
            n = e.children,
            r = rt();
          return i.a.createElement(
            nt.Provider,
            { value: a },
            i.a.createElement('div', { className: r.root }, n),
          );
        },
        ot = Object(N.a)({
          wave: {
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          },
        }),
        lt = function (e) {
          var t = e.theme,
            a = ot(),
            n = Object(c.a)(t.gradient.colors, 2),
            r = n[0],
            o = n[1];
          return i.a.createElement(
            'svg',
            {
              viewBox: '0 0 1440 94',
              preserveAspectRatio: 'xMinYMin slice',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              className: a.wave,
              'data-testid': 'wave-svg',
            },
            i.a.createElement('rect', {
              width: '1440',
              height: '94',
              fill: 'url(#paint0_linear)',
            }),
            i.a.createElement(
              'g',
              { opacity: '0.8' },
              i.a.createElement(
                'mask',
                {
                  id: 'mask0',
                  'mask-type': 'alpha',
                  maskUnits: 'userSpaceOnUse',
                  x: '0',
                  y: '0',
                  width: '1440',
                  height: '94',
                },
                i.a.createElement('rect', {
                  width: '1440',
                  height: '94',
                  fill: r,
                }),
              ),
              i.a.createElement(
                'g',
                { mask: 'url(#mask0)' },
                i.a.createElement('path', {
                  d:
                    'M710.947 14.3685C605.39 154.457 195.464 165.759 92 154.301V210.649L2330 287V222.126C1516.52 222.126 1394.17 80.1091 1161.6 -40.9544C926.122 -163.528 768.278 -61.7182 710.947 14.3685Z',
                  fill: 'url(#paint1_linear)',
                }),
                i.a.createElement('path', {
                  d:
                    'M1163.25 124.34C1058.49 -16.113 651.678 -27.4441 549 -15.9565V-72.4504L2770 -149V-83.9579C1962.69 -83.9579 1841.28 58.4283 1610.47 179.806C1376.79 302.698 1220.14 200.624 1163.25 124.34Z',
                  fill: 'url(#paint2_linear)',
                }),
                i.a.createElement('path', {
                  d:
                    'M-104.701 -5.00477C-224.644 62.3106 -690.435 67.7413 -808 62.2356V89.3117L1735 126V94.827C810.651 94.827 671.63 26.5849 407.363 -31.5885C139.798 -90.4876 -39.557 -41.5659 -104.701 -5.00477Z',
                  fill: 'url(#paint3_linear)',
                }),
                i.a.createElement('path', {
                  d:
                    'M-247.511 -32.6315C-338.493 107.457 -691.821 118.759 -781 107.301V163.649L1148 240V175.126C446.833 175.126 341.378 33.1091 140.917 -87.9544C-62.0447 -210.528 -198.095 -108.718 -247.511 -32.6315Z',
                  fill: 'url(#paint4_linear)',
                }),
              ),
            ),
            i.a.createElement(
              'defs',
              null,
              i.a.createElement(
                'linearGradient',
                {
                  id: 'paint0_linear',
                  x1: '7.21415e-07',
                  y1: '61',
                  x2: '1649',
                  y2: '59.5001',
                  gradientUnits: 'userSpaceOnUse',
                },
                i.a.createElement('stop', { stopColor: r }),
              ),
              i.a.createElement(
                'linearGradient',
                {
                  id: 'paint1_linear',
                  x1: '1318.25',
                  y1: '-285.884',
                  x2: '1311.42',
                  y2: '241.925',
                  gradientUnits: 'userSpaceOnUse',
                },
                i.a.createElement('stop', {
                  stopColor: o,
                  stopOpacity: '0.72',
                }),
                i.a.createElement('stop', {
                  offset: '1',
                  stopColor: o,
                  stopOpacity: '0',
                }),
              ),
              i.a.createElement(
                'linearGradient',
                {
                  id: 'paint2_linear',
                  x1: '1765.93',
                  y1: '425.372',
                  x2: '1759.02',
                  y2: '-103.806',
                  gradientUnits: 'userSpaceOnUse',
                },
                i.a.createElement('stop', {
                  stopColor: o,
                  stopOpacity: '0.72',
                }),
                i.a.createElement('stop', {
                  offset: '1',
                  stopColor: o,
                  stopOpacity: '0',
                }),
              ),
              i.a.createElement(
                'linearGradient',
                {
                  id: 'paint3_linear',
                  x1: '585.365',
                  y1: '-149.282',
                  x2: '583.977',
                  y2: '104.375',
                  gradientUnits: 'userSpaceOnUse',
                },
                i.a.createElement('stop', {
                  stopColor: o,
                  stopOpacity: '0.72',
                }),
                i.a.createElement('stop', {
                  offset: '1',
                  stopColor: o,
                  stopOpacity: '0',
                }),
              ),
              i.a.createElement(
                'linearGradient',
                {
                  id: 'paint4_linear',
                  x1: '275.941',
                  y1: '-332.884',
                  x2: '268.016',
                  y2: '194.894',
                  gradientUnits: 'userSpaceOnUse',
                },
                i.a.createElement('stop', {
                  stopColor: o,
                  stopOpacity: '0.72',
                }),
                i.a.createElement('stop', {
                  offset: '1',
                  stopColor: o,
                  stopOpacity: '0',
                }),
              ),
            ),
          );
        },
        ct = Object(N.a)(function (e) {
          return {
            header: {
              gridArea: 'pageHeader',
              padding: e.spacing(3),
              minHeight: 118,
              width: '100%',
              boxShadow: '0 0 8px 3px rgba(20, 20, 20, 0.3)',
              position: 'relative',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
              alignItems: 'center',
            },
            leftItemsBox: { flex: '1 1 auto' },
            rightItemsBox: {
              flex: '0 1 auto',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginRight: e.spacing(6),
            },
            title: {
              color: e.palette.bursts.fontColor,
              lineHeight: '1.0em',
              wordBreak: 'break-all',
              fontSize: 'calc(24px + 6 * ((100vw - 320px) / 680))',
              marginBottom: e.spacing(1),
            },
            subtitle: {
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.0em',
            },
            type: {
              textTransform: 'uppercase',
              fontSize: 9,
              opacity: 0.8,
              marginBottom: 10,
              color: e.palette.bursts.fontColor,
            },
          };
        }),
        st = function (e) {
          var t = e.type,
            a = (e.typeLink, e.classes);
          return t ? i.a.createElement(I.a, { className: a.type }, t) : null;
        },
        ut = function (e) {
          var t = e.pageTitle,
            a = e.classes,
            n = e.tooltip,
            r = i.a.createElement(
              I.a,
              { className: a.title, variant: 'h4' },
              t,
            );
          return n
            ? i.a.createElement(D.a, { title: n, placement: 'top-start' }, r)
            : r;
        },
        dt = function (e) {
          var t = e.classes,
            a = e.subtitle;
          return a
            ? 'string' !== typeof a
              ? i.a.createElement(i.a.Fragment, null, a)
              : i.a.createElement(
                  I.a,
                  { className: t.subtitle, variant: 'subtitle1' },
                  a,
                )
            : null;
        },
        mt = function (e) {
          var t = e.children,
            a = e.pageTitleOverride,
            n = e.style,
            o = e.subtitle,
            l = e.title,
            c = e.tooltip,
            s = e.type,
            u = e.typeLink,
            d = ct(),
            m = a || l,
            h = l || a,
            p = ''.concat(m, ' | %s | Backstage'),
            f = ''.concat(m, ' | Backstage');
          return i.a.createElement(
            r.Fragment,
            null,
            i.a.createElement(be.a, { titleTemplate: p, defaultTitle: f }),
            i.a.createElement(nt.Consumer, null, function (e) {
              return i.a.createElement(
                'header',
                { style: n, className: d.header },
                i.a.createElement(lt, { theme: e }),
                i.a.createElement(
                  'div',
                  { className: d.leftItemsBox },
                  i.a.createElement(st, { classes: d, type: s, typeLink: u }),
                  i.a.createElement(ut, {
                    classes: d,
                    pageTitle: h,
                    tooltip: c,
                  }),
                  i.a.createElement(dt, { classes: d, subtitle: o }),
                ),
                i.a.createElement('div', { className: d.rightItemsBox }, t),
              );
            }),
          );
        },
        ht = Object(N.a)(function (e) {
          return {
            root: Object(m.a)(
              {
                gridArea: 'pageContent',
                minWidth: 0,
                paddingTop: e.spacing(3),
                paddingBottom: e.spacing(3),
              },
              e.mixins.gutters({}),
            ),
            stretch: { display: 'flex', flexDirection: 'column', flexGrow: 1 },
            noPadding: { padding: 0 },
          };
        }),
        pt = function (e) {
          var t,
            a = e.className,
            n = e.stretch,
            r = e.noPadding,
            o = e.children,
            l = Object(T.a)(e, [
              'className',
              'stretch',
              'noPadding',
              'children',
            ]),
            c = ht();
          return i.a.createElement(
            'article',
            Object.assign({}, l, {
              className: ve()(
                c.root,
                a,
                ((t = {}),
                Object(h.a)(t, c.stretch, n),
                Object(h.a)(t, c.noPadding, r),
                t),
              ),
            }),
            o,
          );
        },
        ft = Object(N.a)(function (e) {
          return {
            container: {
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
              alignItems: 'center',
            },
            leftItemsBox: {
              flex: '1 1 auto',
              marginBottom: e.spacing(1),
              minWidth: 0,
              overflow: 'visible',
            },
            rightItemsBox: {
              flex: '0 1 auto',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginLeft: e.spacing(1),
              marginBottom: e.spacing(1),
              minWidth: 0,
              overflow: 'visible',
            },
            description: {},
            title: { display: 'inline-flex' },
          };
        }),
        gt = function (e) {
          var t = e.title,
            a = void 0 === t ? 'Unknown page' : t,
            n = e.className;
          return i.a.createElement(
            I.a,
            { variant: 'h4', className: n, 'data-testid': 'header-title' },
            a,
          );
        },
        bt = function (e) {
          var t = e.description,
            a = e.title,
            n = e.titleComponent,
            o = void 0 === n ? void 0 : n,
            l = e.children,
            c = ft(),
            s = o
              ? i.a.createElement(o, null)
              : i.a.createElement(gt, { title: a, className: c.title });
          return i.a.createElement(
            r.Fragment,
            null,
            i.a.createElement(be.a, { title: a }),
            i.a.createElement(
              'div',
              { className: c.container },
              i.a.createElement(
                'div',
                { className: c.leftItemsBox },
                s,
                t &&
                  i.a.createElement(
                    I.a,
                    { className: c.description, variant: 'body2' },
                    t,
                  ),
              ),
              i.a.createElement('div', { className: c.rightItemsBox }, l),
            ),
          );
        },
        Et = (function (e) {
          Object(R.a)(a, e);
          var t = Object(F.a)(a);
          function a(e) {
            var n;
            return (
              Object(B.a)(this, a),
              ((n = t.call(this, e)).state = {
                error: void 0,
                errorInfo: void 0,
              }),
              n
            );
          }
          return (
            Object(L.a)(a, [
              {
                key: 'componentDidCatch',
                value: function (e, t) {
                  console.error(
                    'ErrorBoundary, error: '.concat(e, ', info: ').concat(t),
                  ),
                    this.setState({ error: e, errorInfo: t });
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.slackChannel,
                    t = this.state,
                    a = t.error;
                  return t.errorInfo
                    ? i.a.createElement(vt, { error: a, slackChannel: e })
                    : this.props.children;
                },
              },
            ]),
            a
          );
        })(r.Component),
        vt = function (e) {
          var t = e.slackChannel;
          return i.a.createElement(
            'div',
            null,
            'Something went wrong here.',
            ' ',
            t &&
              i.a.createElement(
                i.a.Fragment,
                null,
                'Please contact ',
                t,
                ' for help.',
              ),
          );
        },
        yt = Object(N.a)(function (e) {
          return {
            root: { maxWidth: 'fit-content', padding: e.spacing(2, 2, 2, 2.5) },
            boxTitle: { margin: 0, color: e.palette.textSubtle },
            arrow: { color: e.palette.textSubtle },
          };
        }),
        kt = function (e) {
          var t = e.link,
            a = e.title,
            n = e.onClick,
            r = yt();
          return i.a.createElement(
            'div',
            null,
            i.a.createElement(W.a, null),
            i.a.createElement(
              q.a,
              { href: t, onClick: n, underline: 'none' },
              i.a.createElement(
                P.a,
                { className: r.root },
                i.a.createElement(
                  H.a,
                  null,
                  i.a.createElement(
                    Oe.a,
                    {
                      className: r.boxTitle,
                      fontWeight: 'fontWeightBold',
                      m: 1,
                    },
                    a,
                  ),
                ),
                i.a.createElement(
                  z.a,
                  null,
                  i.a.createElement(ke.a, { className: r.arrow }),
                ),
              ),
            ),
          );
        },
        Ot = Object(N.a)(function (e) {
          return { header: { padding: e.spacing(2, 2, 2, 2.5) } };
        }),
        wt = Object(U.a)(function (e) {
          return {
            title: { fontWeight: 700 },
            subheader: { paddingTop: e.spacing(1) },
          };
        })(_.a),
        xt = Object(U.a)(function (e) {
          return {
            root: {
              display: 'inline-block',
              padding: e.spacing(8, 8, 0, 0),
              float: 'right',
            },
          };
        })(G.a),
        Ct = {
          card: {
            flex: { display: 'flex', flexDirection: 'column' },
            fullHeight: { height: '100%' },
            height100: {
              display: 'flex',
              flexDirection: 'column',
              height: 'calc(100% - 10px)',
              marginBottom: '10px',
            },
            contentheader: { height: 'calc(100% - 40px)' },
            contentheadertabs: { height: 'calc(100% - 97px)' },
            noShrink: { flexShrink: 0 },
            minheight300: { minHeight: 300, overflow: 'initial' },
          },
          cardContent: {
            fullHeight: { height: 'calc(100% - 50px)' },
            height100: { height: 'calc(100% - 50px)' },
            contentRow: { display: 'flex', flexDirection: 'row' },
          },
        },
        jt = function (e) {
          var t = e.title,
            a = e.subheader,
            n = e.divider,
            r = e.deepLink,
            o = e.slackChannel,
            l = void 0 === o ? '#backstage' : o,
            c = e.variant,
            s = e.children,
            u = e.headerStyle,
            d = e.headerProps,
            h = e.actionsClassName,
            p = e.actions,
            f = e.cardClassName,
            g = e.actionsTopRight,
            b = Ot(),
            E = {},
            v = {};
          c &&
            c.split(/[\s]+/g).forEach(function (e) {
              (E = Object(m.a)({}, E, {}, Ct.card[e])),
                (v = Object(m.a)({}, v, {}, Ct.cardContent[e]));
            });
          return i.a.createElement(
            Z.a,
            { style: E },
            i.a.createElement(
              Et,
              { slackChannel: l },
              t &&
                i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    wt,
                    Object.assign(
                      {
                        className: b.header,
                        title: t,
                        subheader: a,
                        style: Object(m.a)({ display: 'inline-block' }, u),
                      },
                      d,
                    ),
                  ),
                  i.a.createElement(W.a, null),
                ),
              g && i.a.createElement(xt, null, g),
              n && i.a.createElement(W.a, null),
              i.a.createElement(Y.a, { className: f, style: v }, s),
              p && i.a.createElement(G.a, { className: h }, p),
              r && i.a.createElement(kt, Object.assign({}, r)),
            ),
          );
        };
      !(function (e) {
        e[(e.GitHub = 0)] = 'GitHub';
      })(Qe || (Qe = {}));
      var St = function () {
          var e = Object(r.useState)(String),
            t = Object(c.a)(e, 2),
            a = t[0],
            n = t[1],
            o = Object(r.useState)(String),
            l = Object(c.a)(o, 2),
            s = l[0],
            u = l[1],
            d = Object(r.useState)(Object),
            m = Object(c.a)(d, 2),
            h = m[0],
            p = m[1],
            f = function () {
              localStorage.removeItem('githubLoginDetails'), p(void 0);
            },
            g = function (e) {
              switch (e.target.name) {
                case 'github-username-tf':
                  n(e.target.value);
                  break;
                case 'github-auth-tf':
                  u(e.target.value);
              }
            },
            b = function (e, t) {
              fetch('https://api.github.com/user', {
                headers: new Headers({
                  Authorization: 'Basic '.concat(
                    btoa(''.concat(e, ':').concat(t)),
                  ),
                  'Content-Type': 'application/x-www-form-urlencoded',
                }),
              })
                .then(function (e) {
                  if (200 === e.status) return e.json();
                  throw Error(''.concat(e.status, ' ').concat(e.statusText));
                })
                .then(function (a) {
                  !(function (e) {
                    localStorage.setItem(
                      'githubLoginDetails',
                      JSON.stringify(e),
                    ),
                      p(e);
                  })({ username: e, token: t, name: a.name || a.login });
                })
                .catch(function () {});
            };
          return i.a.createElement(
            it,
            null,
            i.a.createElement(
              mt,
              { title: 'Login' },
              i.a.createElement(function () {
                var e = localStorage.getItem('githubLoginDetails');
                if (null !== e) {
                  var t = e || h ? JSON.parse(e) : h;
                  return i.a.createElement(
                    I.a,
                    { variant: 'h6', component: 'h2' },
                    'Welcome, '.concat(t.name, '!'),
                    i.a.createElement('br', null),
                    i.a.createElement(q.a, { onClick: f }, 'Logout'),
                  );
                }
                return i.a.createElement(
                  I.a,
                  { variant: 'h6', component: 'h2' },
                  'Welcome, guest!',
                );
              }, null),
            ),
            i.a.createElement(
              pt,
              null,
              i.a.createElement(bt, {
                title: 'Choose a method to authenticate',
              }),
              i.a.createElement(
                M.a,
                { container: !0 },
                i.a.createElement(
                  M.a,
                  { item: !0 },
                  i.a.createElement(
                    jt,
                    null,
                    i.a.createElement(
                      I.a,
                      { variant: 'h6' },
                      i.a.createElement(fe.a, null),
                      ' GitHub',
                    ),
                    i.a.createElement(
                      V.a,
                      null,
                      i.a.createElement(
                        P.a,
                        null,
                        i.a.createElement(J.a, {
                          name: 'github-username-tf',
                          label: 'Username',
                          onChange: g,
                        }),
                      ),
                      i.a.createElement(
                        P.a,
                        null,
                        i.a.createElement(J.a, {
                          name: 'github-auth-tf',
                          label: 'Token',
                          onChange: g,
                        }),
                      ),
                      i.a.createElement(
                        P.a,
                        null,
                        i.a.createElement(
                          Q.a,
                          {
                            'data-testid': 'github-auth-button',
                            variant: 'outlined',
                            color: 'primary',
                            onClick: function () {
                              return (function (e) {
                                switch (e) {
                                  case Qe.GitHub:
                                    var t = a,
                                      n = s;
                                    (function (e, t) {
                                      return (
                                        void 0 !== e &&
                                        null !== e &&
                                        '' !== e &&
                                        void 0 !== t &&
                                        null !== t &&
                                        '' !== t
                                      );
                                    })(t, n) && b(t, n);
                                }
                              })(Qe.GitHub);
                            },
                          },
                          'Authenticate',
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        },
        Ft = (function () {
          function e(t) {
            Object(B.a)(this, e), (this.systemIcons = t);
          }
          return (
            Object(L.a)(e, [
              {
                key: 'getSystemIcon',
                value: function (e) {
                  return this.systemIcons[e];
                },
              },
            ]),
            e
          );
        })(),
        Rt = (function () {
          function e() {
            Object(B.a)(this, e),
              (this.systemIcons = Object(m.a)({}, _e)),
              (this.plugins = new Set());
          }
          return (
            Object(L.a)(e, [
              {
                key: 'registerApis',
                value: function (e) {
                  this.apis = e;
                },
              },
              {
                key: 'registerIcons',
                value: function (e) {
                  this.systemIcons = Object(m.a)({}, this.systemIcons, {}, e);
                },
              },
              {
                key: 'registerPlugin',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    t[a] = arguments[a];
                  for (var n = 0, r = t; n < r.length; n++) {
                    var i = r[n];
                    if (this.plugins.has(i))
                      throw new Error(
                        "Plugin '".concat(i, "' is already registered"),
                      );
                    this.plugins.add(i);
                  }
                },
              },
              {
                key: 'build',
                value: function () {
                  var e,
                    t = new Ft(this.systemIcons),
                    a = new Array(),
                    n = new Array(),
                    r = Object(S.a)(this.plugins.values());
                  try {
                    for (r.s(); !(e = r.n()).done; ) {
                      var o,
                        l = e.value,
                        c = Object(S.a)(l.output());
                      try {
                        for (c.s(); !(o = c.n()).done; ) {
                          var s = o.value;
                          switch (s.type) {
                            case 'route':
                              var u = s.path,
                                d = s.component,
                                m = s.options,
                                h = (void 0 === m ? {} : m).exact,
                                p = void 0 === h || h;
                              a.push(
                                i.a.createElement(A.b, {
                                  key: u,
                                  path: u,
                                  component: d,
                                  exact: p,
                                }),
                              );
                              break;
                            case 'redirect-route':
                              var f = s.path,
                                g = s.target,
                                b = s.options,
                                E = (void 0 === b ? {} : b).exact,
                                v = void 0 === E || E;
                              a.push(
                                i.a.createElement(A.a, {
                                  key: f,
                                  path: f,
                                  to: g,
                                  exact: v,
                                }),
                              );
                              break;
                            case 'feature-flag':
                              n.push({ pluginId: l.getId(), name: s.name });
                          }
                        }
                      } catch (O) {
                        c.e(O);
                      } finally {
                        c.f();
                      }
                    }
                  } catch (O) {
                    r.e(O);
                  } finally {
                    r.f();
                  }
                  var y = this.apis && this.apis.get(We);
                  y && (y.registeredFeatureFlags = n),
                    a.push(
                      i.a.createElement(A.b, {
                        key: 'login',
                        path: '/login',
                        component: St,
                        exact: !0,
                      }),
                    );
                  var k = i.a.createElement(
                    A.d,
                    null,
                    a,
                    i.a.createElement(A.b, {
                      render: function (e) {
                        return i.a.createElement(
                          Ue,
                          Object.assign({}, e, {
                            status: '404',
                            statusMessage: 'PAGE NOT FOUND',
                          }),
                        );
                      },
                    }),
                  );
                  return (
                    this.apis &&
                      (k = i.a.createElement(Ze, {
                        apis: this.apis,
                        children: k,
                      })),
                    function () {
                      return i.a.createElement(De, { app: t, children: k });
                    }
                  );
                },
              },
            ]),
            e
          );
        })();
      function Tt() {
        if (!('localStorage' in window))
          throw new Error(
            'Feature Flags are not supported on browsers without the Local Storage API',
          );
      }
      function Bt(e) {
        if (e.length < 3)
          throw new Error(
            "The '".concat(
              e,
              "' feature flag must have a minimum length of three characters.",
            ),
          );
        if (e.length > 150)
          throw new Error(
            "The '".concat(e, "' feature flag must not exceed 150 characters."),
          );
        if (!e.match(/^[a-z]+[a-z0-9-]+$/))
          throw new Error(
            "The '".concat(
              e,
              "' feature flag must start with a lowercase letter and only contain lowercase letters, numbers and hyphens. ",
            ) + 'Examples: feature-flag-one, alpha, release-2020',
          );
      }
      var Lt = (function (e) {
          Object(R.a)(a, e);
          var t = Object(F.a)(a);
          function a() {
            return Object(B.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(L.a)(
              a,
              [
                {
                  key: 'get',
                  value: function (e) {
                    return (
                      Object(C.a)(Object(x.a)(a.prototype), 'get', this).call(
                        this,
                        e,
                      ) || y.Off
                    );
                  },
                },
                {
                  key: 'set',
                  value: function (e, t) {
                    Bt(e);
                    var n = Object(C.a)(
                      Object(x.a)(a.prototype),
                      'set',
                      this,
                    ).call(this, e, t);
                    return this.save(), n;
                  },
                },
                {
                  key: 'delete',
                  value: function (e) {
                    var t = Object(C.a)(
                      Object(x.a)(a.prototype),
                      'delete',
                      this,
                    ).call(this, e);
                    return this.save(), t;
                  },
                },
                {
                  key: 'clear',
                  value: function () {
                    Object(C.a)(Object(x.a)(a.prototype), 'clear', this).call(
                      this,
                    ),
                      this.save();
                  },
                },
                {
                  key: 'save',
                  value: function () {
                    window.localStorage.setItem(
                      'featureFlags',
                      JSON.stringify(this.toObject()),
                    );
                  },
                },
                {
                  key: 'toObject',
                  value: function () {
                    return Array.from(this.entries()).reduce(function (e, t) {
                      var a = Object(c.a)(t, 2),
                        n = a[0],
                        r = a[1];
                      return Object(m.a)({}, e, Object(h.a)({}, n, r));
                    }, {});
                  },
                },
                {
                  key: 'toJSON',
                  value: function () {
                    return JSON.stringify(this.toObject());
                  },
                },
                {
                  key: 'toString',
                  value: function () {
                    return this.toJSON();
                  },
                },
              ],
              [
                {
                  key: 'load',
                  value: function () {
                    Tt();
                    try {
                      var e = window.localStorage.getItem('featureFlags'),
                        t = JSON.parse(e);
                      return new this(Object.entries(t));
                    } catch (a) {
                      return new this([]);
                    }
                  },
                },
              ],
            ),
            a
          );
        })(Object(j.a)(Map)),
        At = (function (e) {
          Object(R.a)(a, e);
          var t = Object(F.a)(a);
          function a() {
            return Object(B.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(L.a)(
              a,
              [
                {
                  key: 'push',
                  value: function () {
                    for (
                      var e, t = arguments.length, n = new Array(t), r = 0;
                      r < t;
                      r++
                    )
                      n[r] = arguments[r];
                    return (
                      Array.from(n).forEach(function (e) {
                        return Bt(e.name);
                      }),
                      (e = Object(C.a)(
                        Object(x.a)(a.prototype),
                        'push',
                        this,
                      )).call.apply(e, [this].concat(n))
                    );
                  },
                },
                {
                  key: 'concat',
                  value: function () {
                    for (
                      var e, t = arguments.length, n = new Array(t), r = 0;
                      r < t;
                      r++
                    )
                      n[r] = arguments[r];
                    var i = (e = Object(C.a)(
                      Object(x.a)(a.prototype),
                      'concat',
                      this,
                    )).call.apply(e, [this].concat(n));
                    return (
                      Array.from(i).forEach(function (e) {
                        return Bt(e.name);
                      }),
                      i
                    );
                  },
                },
                {
                  key: 'toObject',
                  value: function () {
                    return Object(s.a)(this.values());
                  },
                },
                {
                  key: 'toJSON',
                  value: function () {
                    return JSON.stringify(this.toObject());
                  },
                },
                {
                  key: 'toString',
                  value: function () {
                    return this.toJSON();
                  },
                },
              ],
              [
                {
                  key: 'from',
                  value: function (e) {
                    return (
                      Array.from(e).forEach(function (e) {
                        return Bt(e.name);
                      }),
                      Object(w.a)(a, Object(s.a)(e))
                    );
                  },
                },
              ],
            ),
            a
          );
        })(Object(j.a)(Array)),
        Nt = (function () {
          function e() {
            Object(B.a)(this, e), (this.registeredFeatureFlags = []);
          }
          return (
            Object(L.a)(e, [
              {
                key: 'getFlags',
                value: function () {
                  return (
                    this.userFlags || (this.userFlags = Lt.load()),
                    this.userFlags
                  );
                },
              },
              {
                key: 'getRegisteredFlags',
                value: function () {
                  return At.from(this.registeredFeatureFlags);
                },
              },
            ]),
            e
          );
        })(),
        Mt = (function () {
          function e(t) {
            Object(B.a)(this, e), (this.config = t);
          }
          return (
            Object(L.a)(e, [
              {
                key: 'getId',
                value: function () {
                  return this.config.id;
                },
              },
              {
                key: 'output',
                value: function () {
                  if (this.storedOutput) return this.storedOutput;
                  if (!this.config.register) return [];
                  var e = new Array();
                  return (
                    this.config.register({
                      router: {
                        registerRoute: function (t, a, n) {
                          e.push({
                            type: 'route',
                            path: t,
                            component: a,
                            options: n,
                          });
                        },
                        registerRedirect: function (t, a, n) {
                          e.push({
                            type: 'redirect-route',
                            path: t,
                            target: a,
                            options: n,
                          });
                        },
                      },
                      featureFlags: {
                        register: function (t) {
                          Tt(),
                            Bt(t),
                            e.push({ type: 'feature-flag', name: t });
                        },
                      },
                    }),
                    (this.storedOutput = e),
                    this.storedOutput
                  );
                },
              },
              {
                key: 'toString',
                value: function () {
                  return 'plugin{'.concat(this.config.id, '}');
                },
              },
            ]),
            e
          );
        })();
      function It(e) {
        return new Mt(e);
      }
      var qt,
        Dt = Object(N.a)(function (e) {
          return {
            root: {
              textAlign: 'left',
              margin: e.spacing(2),
              display: 'inline-block',
            },
            label: {
              color: '#FFFFFF',
              fontWeight: 'bold',
              lineHeight: '16px',
              letterSpacing: 0,
              fontSize: 14,
              height: '16px',
              marginBottom: 2,
            },
            value: {
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '16px',
              fontSize: 14,
              height: '16px',
            },
          };
        }),
        Wt = function (e) {
          var t = e.value,
            a = e.className;
          return i.a.createElement(I.a, { className: a }, t);
        },
        Pt = function (e) {
          var t = e.label,
            a = e.value,
            n = e.url,
            r = Dt(),
            o = i.a.createElement(Wt, {
              className: r.value,
              value: a || '<Unknown>',
            });
          return i.a.createElement(
            'span',
            { className: r.root },
            i.a.createElement(I.a, { className: r.label }, t),
            n ? i.a.createElement(q.a, { href: n }, o) : o,
          );
        },
        Ht =
          (Object(N.a)(function (e) {
            return {
              root: {
                padding: e.spacing(0, 2, 0, 2.5),
                minHeight: e.spacing(3),
              },
              indicator: {
                backgroundColor: e.palette.info.main,
                height: e.spacing(0.3),
              },
            };
          }),
          Object(U.a)(function (e) {
            return {
              root: {
                padding: e.spacing(2, 2, 2, 2.5),
                display: 'inline-block',
              },
              title: { fontWeight: 700 },
              subheader: { paddingTop: e.spacing(1) },
            };
          })(_.a),
          Object(N.a)(function (e) {
            return {
              root: {
                minWidth: e.spacing(6),
                minHeight: e.spacing(3),
                margin: e.spacing(0, 2, 0, 0),
                padding: e.spacing(0.5, 0, 0.5, 0),
                textTransform: 'none',
              },
              selected: { fontWeight: 'bold' },
            };
          }),
          64),
        zt = 220,
        Ut = 400,
        _t = 200,
        Gt = Object(r.createContext)(!1),
        Zt = Object(N.a)(function (e) {
          return {
            root: {
              zIndex: 1e3,
              position: 'relative',
              overflow: 'visible',
              width: e.spacing(7) + 1,
            },
            drawer: {
              display: 'flex',
              flexFlow: 'column nowrap',
              alignItems: 'flex-start',
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
              padding: 0,
              background: e.palette.sidebar,
              overflowX: 'hidden',
              width: Ht,
              transition: e.transitions.create('width', {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.shortest,
              }),
            },
            drawerOpen: {
              width: zt,
              transition: e.transitions.create('width', {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.shorter,
              }),
            },
            drawerPeek: { width: Ht + 4 },
          };
        });
      !(function (e) {
        (e[(e.Closed = 0)] = 'Closed'),
          (e[(e.Peek = 1)] = 'Peek'),
          (e[(e.Open = 2)] = 'Open');
      })(qt || (qt = {}));
      var Yt = function (e) {
          var t,
            a = e.openDelayMs,
            n = void 0 === a ? Ut : a,
            o = e.closeDelayMs,
            l = void 0 === o ? _t : o,
            s = e.children,
            u = Zt(),
            d = Object(r.useState)(qt.Closed),
            m = Object(c.a)(d, 2),
            p = m[0],
            f = m[1],
            g = Object(r.useRef)(),
            b = function () {
              g.current && (clearTimeout(g.current), (g.current = void 0)),
                p !== qt.Open &&
                  ((g.current = setTimeout(function () {
                    (g.current = void 0), f(qt.Open);
                  }, n)),
                  f(qt.Peek));
            },
            E = function () {
              g.current && (clearTimeout(g.current), (g.current = void 0)),
                p === qt.Peek
                  ? f(qt.Closed)
                  : p === qt.Open &&
                    (g.current = setTimeout(function () {
                      (g.current = void 0), f(qt.Closed);
                    }, l));
            };
          return i.a.createElement(
            'div',
            {
              className: u.root,
              onMouseEnter: b,
              onFocus: b,
              onMouseLeave: E,
              onBlur: E,
              'data-testid': 'sidebar-root',
            },
            i.a.createElement(
              Gt.Provider,
              { value: p === qt.Open },
              i.a.createElement(
                'div',
                {
                  className: Object(we.a)(
                    u.drawer,
                    ((t = {}),
                    Object(h.a)(t, u.drawerPeek, p === qt.Peek),
                    Object(h.a)(t, u.drawerOpen, p === qt.Open),
                    t),
                  ),
                },
                s,
              ),
            ),
          );
        },
        Vt = Object(N.a)({
          root: { width: '100%', minHeight: '100%', paddingLeft: Ht },
        }),
        Jt = function (e) {
          var t = e.children,
            a = Vt();
          return i.a.createElement('div', { className: a.root }, t);
        },
        Qt = Object(N.a)(function (e) {
          return {
            root: {
              color: '#b5b5b5',
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'center',
              height: 40,
              cursor: 'pointer',
            },
            closed: { width: Ht, justifyContent: 'center' },
            open: { width: zt },
            label: {
              fontWeight: 'bolder',
              whiteSpace: 'nowrap',
              lineHeight: 1,
              marginLeft: e.spacing(1),
            },
            iconContainer: {
              height: '100%',
              width: Ht,
              marginRight: -e.spacing(2),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          };
        }),
        Xt = function (e) {
          var t = e.icon,
            a = e.text,
            n = e.to,
            o = e.onClick,
            l = Qt();
          return Object(r.useContext)(Gt)
            ? i.a.createElement(
                q.a,
                {
                  className: Object(we.a)(l.root, l.open),
                  href: n,
                  onClick: o,
                  underline: 'none',
                },
                i.a.createElement(
                  'div',
                  { 'data-testid': 'login-button', className: l.iconContainer },
                  i.a.createElement(t, { fontSize: 'small' }),
                ),
                i.a.createElement(
                  I.a,
                  { variant: 'subtitle1', className: l.label },
                  a,
                ),
              )
            : i.a.createElement(
                q.a,
                {
                  className: Object(we.a)(l.root, l.closed),
                  href: n,
                  onClick: o,
                  underline: 'none',
                },
                i.a.createElement(t, { fontSize: 'small' }),
              );
        },
        $t = Object(K.a)('div')({ flex: 1 }),
        Kt = Object(K.a)('div')({ height: 8 }),
        ea = Object(K.a)('hr')({
          height: 1,
          width: '100%',
          background: '#383838',
          border: 'none',
        }),
        ta = function (e) {
          var t = 'dark' === e ? '16%' : '97%';
          return '\n    hsl(0, 0%, '
            .concat(t, ') 0%,\n    hsla(0, 0%, ')
            .concat(t, ', 0.987) 8.1%,\n    hsla(0, 0%, ')
            .concat(t, ', 0.951) 15.5%,\n    hsla(0, 0%, ')
            .concat(t, ', 0.896) 22.5%,\n    hsla(0, 0%, ')
            .concat(t, ', 0.825) 29%,\n    hsla(0, 0%, ')
            .concat(t, ', 0.741) 35.3%,\n    hsla(0, 0%, ')
            .concat(t, ', 0.648) 41.2%,\n    hsla(0, 0%, ')
            .concat(t, ', 0.55) 47.1%,\n    hsla(0, 0%, ')
            .concat(t, ', 0.45) 52.9%,\n    hsla(0, 0%, ')
            .concat(t, ', 0.352) 58.8%,\n    hsla(0, 0%, ')
            .concat(t, ', 0.259) 64.7%,\n    hsla(0, 0%, ')
            .concat(t, ', 0.175) 71%,\n    hsla(0, 0%, ')
            .concat(t, ', 0.104) 77.5%,\n    hsla(0, 0%, ')
            .concat(t, ', 0.049) 84.5%,\n    hsla(0, 0%, ')
            .concat(t, ', 0.013) 91.9%,\n    hsla(0, 0%, ')
            .concat(t, ', 0) 100%\n  ');
        },
        aa = Object(N.a)(function (e) {
          return {
            root: {
              position: 'relative',
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'center',
            },
            container: {
              overflow: 'auto',
              scrollbarWidth: 0,
              '&::-webkit-scrollbar': { display: 'none' },
            },
            fade: {
              position: 'absolute',
              width: 100,
              height: 'calc(100% + '.concat(10, 'px)'),
              transition: 'opacity 300ms',
              pointerEvents: 'none',
            },
            fadeLeft: {
              left: -10,
              background: 'linear-gradient(90deg, '.concat(
                ta(e.palette.type),
                ')',
              ),
            },
            fadeRight: {
              right: -10,
              background: 'linear-gradient(270deg, '.concat(
                ta(e.palette.type),
                ')',
              ),
            },
            fadeHidden: { opacity: 0 },
            button: { position: 'absolute' },
            buttonLeft: { left: -e.spacing(2) },
            buttonRight: { right: -e.spacing(2) },
          };
        });
      var na = function (e) {
          var t = e.scrollStep,
            a = void 0 === t ? 100 : t,
            n = e.scrollSpeed,
            r = void 0 === n ? 50 : n,
            o = e.minScrollDistance,
            l = void 0 === o ? 5 : o,
            s = e.children,
            u = Object(T.a)(e, [
              'scrollStep',
              'scrollSpeed',
              'minScrollDistance',
              'children',
            ]),
            d = aa(e),
            m = i.a.useRef(),
            p = (function (e) {
              var t = i.a.useState([0, 0]),
                a = Object(c.a)(t, 2),
                n = Object(c.a)(a[0], 2),
                r = n[0],
                o = n[1],
                l = a[1];
              return (
                i.a.useLayoutEffect(
                  function () {
                    var t = e.current;
                    if (t) {
                      var a = function () {
                        var e = t.scrollLeft,
                          a = t.scrollWidth - t.offsetWidth - t.scrollLeft;
                        l([e, a]);
                      };
                      return (
                        a(),
                        t.addEventListener('scroll', a),
                        window.addEventListener('resize', a),
                        function () {
                          t.removeEventListener('scroll', a),
                            window.removeEventListener('resize', a);
                        }
                      );
                    }
                    l([0, 0]);
                  },
                  [e],
                ),
                [r, o]
              );
            })(m),
            f = Object(c.a)(p, 2),
            g = f[0],
            b = f[1],
            E = (function (e, t, a) {
              var n = i.a.useState(0),
                r = Object(c.a)(n, 2),
                o = r[0],
                l = r[1];
              return (
                i.a.useLayoutEffect(
                  function () {
                    if (0 !== o) {
                      var n = performance.now(),
                        r = requestAnimationFrame(function (r) {
                          if (e.current) {
                            var i = r - n,
                              c = (Math.abs(o) * i) / t,
                              s = Math.max(a, c) * Math.sign(o);
                            e.current.scrollBy({ left: s });
                            var u = o - s;
                            Math.sign(o) !== Math.sign(u) ? l(0) : l(u);
                          }
                        });
                      return function () {
                        return cancelAnimationFrame(r);
                      };
                    }
                  },
                  [e, o, t, a],
                ),
                l
              );
            })(m, r, l),
            v = function (e) {
              m.current && E(e ? a : -a);
            };
          return i.a.createElement(
            'div',
            Object.assign({}, u, { className: d.root }),
            i.a.createElement(
              M.a,
              {
                container: !0,
                direction: 'row',
                wrap: 'nowrap',
                className: d.container,
                ref: m,
              },
              s,
            ),
            i.a.createElement('div', {
              className: ve()(
                d.fade,
                d.fadeLeft,
                Object(h.a)({}, d.fadeHidden, 0 === g),
              ),
            }),
            i.a.createElement('div', {
              className: ve()(
                d.fade,
                d.fadeRight,
                Object(h.a)({}, d.fadeHidden, 0 === b),
              ),
            }),
            g > 0 &&
              i.a.createElement(
                ee.a,
                {
                  title: 'Scroll Left',
                  onClick: function () {
                    return v(!1);
                  },
                  className: ve()(d.button, d.buttonLeft, {}),
                },
                i.a.createElement(Ce.a, null),
              ),
            b > 0 &&
              i.a.createElement(
                ee.a,
                {
                  title: 'Scroll Right',
                  onClick: function () {
                    return v(!0);
                  },
                  className: ve()(d.button, d.buttonRight, {}),
                },
                i.a.createElement(Se.a, null),
              ),
          );
        },
        ra = Object(N.a)(function (e) {
          return {
            root: { position: 'relative', lineHeight: 0 },
            overlay: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -60%)',
              fontSize: 45,
              fontWeight: 'bold',
              color: e.palette.textContrast,
            },
            circle: { width: '80%', transform: 'translate(10%, 0)' },
            colorUnknown: {},
          };
        }),
        ia = { fractional: !0, inverse: !1, unit: '%', max: 100 };
      function oa(e, t, a, n) {
        if (isNaN(t)) return '#ddd';
        var r = n || ia.max,
          i = a ? r - t : t;
        return i < r / 3
          ? e.status.error
          : i < r * (2 / 3)
          ? e.status.warning
          : e.status.ok;
      }
      var la = function (e) {
          var t = ra(e),
            a = Object(te.a)(),
            n = Object(m.a)({}, ia, {}, e),
            r = n.value,
            o = n.fractional,
            l = n.inverse,
            c = n.unit,
            s = n.max,
            u = o ? Math.round(r * s) : r,
            d = 100 !== s ? Math.round(r) : u;
          return i.a.createElement(
            'div',
            { className: t.root },
            i.a.createElement(Fe.a, {
              strokeLinecap: 'butt',
              percent: u,
              strokeWidth: 12,
              trailWidth: 12,
              strokeColor: oa(a.palette, d, l, s),
              className: t.circle,
            }),
            i.a.createElement(
              'div',
              { className: t.overlay },
              isNaN(r) ? 'N/A' : ''.concat(d).concat(c),
            ),
          );
        },
        ca = Object(N.a)({ root: { height: '100%', width: 250 } }),
        sa = function (e) {
          var t = ca(e),
            a = e.title,
            n = e.subheader,
            r = e.progress,
            o = e.deepLink,
            l = e.variant;
          return i.a.createElement(
            'div',
            { className: t.root },
            i.a.createElement(
              jt,
              { title: a, subheader: n, deepLink: o, variant: l },
              i.a.createElement(la, { value: r }),
            ),
          );
        };
      Object(N.a)(function (e) {
        return {
          button: {
            '&:hover': {
              backgroundColor: e.palette.highlight,
              cursor: 'pointer',
            },
          },
        };
      });
      pe.a.string.isRequired, pe.a.number, pe.a.string;
      var ua = function (e) {
          var t = Object(r.useState)(!1),
            a = Object(c.a)(t, 2),
            n = a[0],
            o = a[1];
          return (
            Object(r.useEffect)(function () {
              var e = setTimeout(function () {
                return o(!0);
              }, 250);
              return function () {
                return clearTimeout(e);
              };
            }, []),
            n
              ? i.a.createElement(
                  ae.a,
                  Object.assign({}, e, { 'data-testid': 'progress' }),
                )
              : i.a.createElement('div', {
                  style: { display: 'none' },
                  'data-testid': 'progress',
                })
          );
        },
        da = function () {},
        ma =
          (i.a.createContext({
            stepperLength: 0,
            stepIndex: 0,
            setStepIndex: da,
            stepHistory: [],
            setStepHistory: da,
            onStepChange: da,
          }),
          Object(N.a)(function (e) {
            return {
              root: {
                marginTop: e.spacing(3),
                '& button': { marginRight: e.spacing(1) },
              },
            };
          }),
          Object(N.a)(function (e) {
            return { end: { padding: e.spacing(3) } };
          }),
          Object(N.a)({
            alpha: {
              color: '#d00150',
              fontFamily: 'serif',
              fontWeight: 'normal',
              fontStyle: 'italic',
            },
            beta: {
              color: '#4d65cc',
              fontFamily: 'serif',
              fontWeight: 'normal',
              fontStyle: 'italic',
            },
          })),
        ha = function (e) {
          var t = ma(e);
          return e.isShorthand
            ? i.a.createElement(
                'span',
                { className: t.alpha, style: { fontSize: '120%' } },
                '\u03b1',
              )
            : i.a.createElement('span', { className: t.alpha }, 'Alpha');
        },
        pa = Object(N.a)(function (e) {
          return {
            leftIcon: { marginRight: e.spacing(1) },
            popoverList: { minWidth: 260, maxWidth: 320 },
          };
        }),
        fa = function (e) {
          var t = e.slackChannel,
            a = void 0 === t ? '#backstage' : t,
            n = e.email,
            o = void 0 === n ? [] : n,
            l = e.children,
            s = Object(r.useState)(!1),
            u = Object(c.a)(s, 2),
            d = u[0],
            m = u[1],
            h = Object(r.useState)(null),
            p = Object(c.a)(h, 2),
            f = p[0],
            g = p[1],
            b = pa(),
            E = Array.isArray(a) ? a : [a],
            v = Array.isArray(o) ? o : [o];
          return i.a.createElement(
            r.Fragment,
            null,
            i.a.createElement(
              Q.a,
              {
                'data-testid': 'support-button',
                color: 'primary',
                onClick: function (e) {
                  g(e.currentTarget), m(!0);
                },
              },
              i.a.createElement(Le.a, { className: b.leftIcon }),
              'Support',
            ),
            i.a.createElement(
              ne.a,
              {
                open: d,
                anchorEl: f,
                anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
                transformOrigin: { vertical: 'top', horizontal: 'right' },
                onClose: function () {
                  m(!1);
                },
              },
              i.a.createElement(
                V.a,
                { className: b.popoverList },
                i.a.Children.map(l, function (e, t) {
                  return i.a.createElement(
                    P.a,
                    { alignItems: 'flex-start', key: t },
                    e,
                  );
                }),
                E &&
                  i.a.createElement(
                    P.a,
                    null,
                    i.a.createElement(z.a, null, i.a.createElement(Te.a, null)),
                    i.a.createElement(H.a, {
                      primary: 'Support',
                      secondary: i.a.createElement(
                        'div',
                        null,
                        E.map(function (e, t) {
                          return i.a.createElement(q.a, { key: t }, e);
                        }),
                      ),
                    }),
                  ),
                v.length > 0 &&
                  i.a.createElement(
                    P.a,
                    null,
                    i.a.createElement(z.a, null, i.a.createElement(Te.a, null)),
                    i.a.createElement(H.a, {
                      primary: 'Contact',
                      secondary: i.a.createElement(
                        'div',
                        null,
                        v.map(function (e, t) {
                          return i.a.createElement(
                            I.a,
                            { key: t },
                            i.a.createElement(q.a, null, e),
                          );
                        }),
                      ),
                    }),
                  ),
              ),
            ),
          );
        },
        ga = function (e) {
          var t = e.data;
          return Array.isArray(t)
            ? t.map(function (e, t) {
                return i.a.createElement(
                  'span',
                  { key: t },
                  e,
                  i.a.createElement('br', null),
                );
              })
            : t;
        },
        ba = function (e) {
          var t = e.column,
            a = e.row;
          return i.a.createElement(
            oe.a,
            {
              align: t.numeric ? 'right' : 'left',
              key: t.id,
              style: { verticalAlign: 'top' },
            },
            i.a.createElement(ga, { data: a[t.id] || '' }),
          );
        },
        Ea = function () {},
        va =
          (Object(r.memo)(function (e) {
            var t = e.row,
              a = e.columns,
              n = e.handleRowClick,
              r = e.style;
            return i.a.createElement(
              ie.a,
              {
                onClick: function (e) {
                  return (n || Ea)(e, t.id);
                },
                key: t.id,
                style: r,
              },
              a.map(function (e) {
                return i.a.createElement(ba, { key: e.id, column: e, row: t });
              }),
            );
          }),
          Object(U.a)(function (e) {
            return {
              root: {
                fontWeight: 'bolder',
                whiteSpace: 'nowrap',
                paddingRight: e.spacing(4),
                border: '0',
                verticalAlign: 'top',
              },
            };
          })(oe.a)),
        ya = Object(U.a)({
          root: {
            color: 'rgba(0, 0, 0, 0.6)',
            border: '0',
            verticalAlign: 'top',
          },
        })(oe.a),
        ka = function (e) {
          var t = e.dense,
            a = e.children;
          return i.a.createElement(
            le.a,
            null,
            !t &&
              i.a.createElement(
                'colgroup',
                null,
                i.a.createElement('col', { style: { width: 'auto' } }),
                i.a.createElement('col', { style: { width: '100%' } }),
              ),
            i.a.createElement(ce.a, null, a),
          );
        },
        Oa = function (e) {
          var t = e.title,
            a = e.children,
            n = Object(T.a)(e, ['title', 'children']);
          return i.a.createElement(
            ie.a,
            null,
            t && i.a.createElement(va, null, t),
            i.a.createElement(ya, Object.assign({ colSpan: t ? 1 : 2 }, n), a),
          );
        },
        wa = Object(U.a)(function (e) {
          return {
            root: {
              listStyle: 'none',
              margin: e.spacing(0, 0, -1, 0),
              padding: '0',
            },
          };
        })(function (e) {
          var t = e.classes,
            a = e.children;
          return i.a.createElement('ul', { className: t.root }, a);
        }),
        xa = Object(U.a)(function (e) {
          return { root: { padding: e.spacing(0, 0, 1, 0) } };
        })(function (e) {
          var t = e.classes,
            a = e.children;
          return i.a.createElement('li', { className: t.root }, a);
        }),
        Ca = { root: { margin: '0 0', listStyleType: 'none' } },
        ja = { root: Object(m.a)({}, Ca.root, { paddingLeft: '8px' }) };
      function Sa(e, t, a) {
        return i.a.isValidElement(e)
          ? i.a.createElement(r.Fragment, null, e)
          : 'object' !== typeof e || Array.isArray(e)
          ? Array.isArray(e)
            ? (function (e, t, a) {
                var n = e.map(function (e, t) {
                  return i.a.createElement(xa, { key: t }, Sa(e));
                });
                return a
                  ? i.a.createElement(Ra, null, n)
                  : i.a.createElement(Fa, null, n);
              })(e, 0, a)
            : i.a.createElement(r.Fragment, null, e)
          : (function (e, t, a) {
              var n = Object.keys(e).map(function (a) {
                var n = Sa(e[a], !0),
                  r = t && t.titleFormat ? t.titleFormat(a) : Ne()(a);
                return i.a.createElement(xa, { key: a }, ''.concat(r, ': '), n);
              });
              return a
                ? i.a.createElement(Ra, null, n)
                : i.a.createElement(Fa, null, n);
            })(e, t, a);
      }
      var Fa = Object(U.a)(Ca)(function (e) {
          var t = e.classes,
            a = e.children;
          return i.a.createElement(wa, { classes: t }, a);
        }),
        Ra = Object(U.a)(ja)(function (e) {
          var t = e.classes,
            a = e.children;
          return i.a.createElement(wa, { classes: t }, a);
        }),
        Ta = function (e) {
          var t = e.value,
            a = e.options;
          return i.a.createElement(r.Fragment, null, Sa(t, a));
        },
        Ba = function (e) {
          var t = e.title,
            a = e.value,
            n = e.options;
          return i.a.createElement(
            Oa,
            { title: n && n.titleFormat ? n.titleFormat(t) : Ne()(t) },
            i.a.createElement(Ta, { value: a, options: n }),
          );
        };
      r.Component;
      function La(e, t) {
        var a = e[e.length - 1];
        if (a)
          return a >= 0.9
            ? t.palette.status.ok
            : a >= 0.5
            ? t.palette.status.warning
            : t.palette.status.error;
      }
      var Aa = function (e) {
        var t = Object(te.a)();
        return e.data
          ? i.a.createElement(
              Me.Sparklines,
              Object.assign({ width: 120, height: 30, min: 0, max: 1 }, e),
              e.title && i.a.createElement('title', null, e.title),
              i.a.createElement(Me.SparklinesLine, { color: La(e.data, t) }),
            )
          : null;
      };
      Object(N.a)({
        '@keyframes pulsateSlightly': {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.1)' },
        },
        '@keyframes pulsateAndFade': {
          '0%': { transform: 'scale(1.0)', opacity: 0.9 },
          '100%': { transform: 'scale(1.5)', opacity: 0 },
        },
        featureWrapper: { position: 'relative' },
        backdrop: {
          zIndex: 2e3,
          position: 'fixed',
          overflow: 'hidden',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
        dot: {
          position: 'absolute',
          backgroundColor: 'transparent',
          borderRadius: '100%',
          border: '1px solid rgba(103, 146, 180, 0.98)',
          boxShadow: '0px 0px 0px 20000px rgba(0, 0, 0, 0.5)',
          zIndex: 2001,
          transformOrigin: 'center center',
          animation:
            '$pulsateSlightly 1744ms 1.2s cubic-bezier(0.4, 0, 0.2, 1) alternate infinite',
        },
        pulseCircle: {
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          borderRadius: '100%',
          border: '2px solid white',
          zIndex: 2001,
          transformOrigin: 'center center',
          animation:
            '$pulsateAndFade 872ms 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        },
        text: { position: 'absolute', color: 'white', zIndex: 2003 },
      });
      var Na = Object(N.a)(function (e) {
          return {
            status: {
              width: 12,
              height: 12,
              display: 'inline-block',
              marginRight: 1,
            },
            ok: { backgroundColor: e.palette.status.ok, borderRadius: '50%' },
            warning: { backgroundColor: e.palette.status.warning },
            error: {
              width: '0',
              height: '0',
              borderLeft: '7px solid transparent',
              borderRight: '7px solid transparent',
              borderBottom: '14px solid '.concat(e.palette.status.error),
            },
            pending: { backgroundColor: e.palette.status.pending },
            running: {
              animation: '$blink 0.8s step-start 0s infinite',
              backgroundColor: e.palette.status.running,
            },
            '@keyframes blink': {
              '50%': { backgroundColor: e.palette.status.background },
            },
          };
        }),
        Ma = function (e) {
          var t = Na(e);
          return i.a.createElement(
            'span',
            Object.assign(
              { className: ve()(t.status, t.ok), 'aria-label': 'Status OK' },
              e,
            ),
          );
        },
        Ia = function (e) {
          var t = Na(e);
          return i.a.createElement(
            'span',
            Object.assign(
              {
                className: ve()(t.status, t.error),
                'aria-label': 'Status error',
              },
              e,
            ),
          );
        },
        qa = function (e) {
          var t = Na(e);
          return i.a.createElement(
            'span',
            Object.assign(
              {
                className: ve()(t.status, t.pending),
                'aria-label': 'Status pending',
              },
              e,
            ),
          );
        },
        Da =
          (Object(N.a)(function (e) {
            return {
              root: { marginRight: e.spacing(1), fill: e.palette.warningText },
            };
          }),
          Object(N.a)(function (e) {
            return {
              message: {
                display: 'flex',
                flexDirection: 'column',
                padding: e.spacing(1.5),
                backgroundColor: e.palette.warningBackground,
                color: e.palette.warningText,
                verticalAlign: 'middle',
              },
              header: {
                display: 'flex',
                flexDirection: 'row',
                marginBottom: e.spacing(1),
              },
              headerText: { color: e.palette.warningText },
              messageText: { color: e.palette.warningText },
            };
          }),
          a(64)),
        Wa = a(167),
        Pa = a.n(Wa),
        Ha = a(168),
        za = a.n(Ha),
        Ua = a(171),
        _a = a.n(Ua),
        Ga = a(169),
        Za = a.n(Ga),
        Ya = a(170),
        Va = a.n(Ya),
        Ja = i.a.createContext({ theme: 'light', toggleTheme: function () {} });
      var Qa = a(166),
        Xa = a.n(Qa),
        $a = a(165),
        Ka = a.n($a),
        en = a(125),
        tn = a.n(en),
        an = function () {
          return i.a.createElement(Ja.Consumer, null, function (e) {
            var t = 'Auto',
              a = tn.a;
            switch (e.theme) {
              case 'dark':
                (t = 'Dark mode'), (a = Ka.a);
                break;
              case 'light':
                (t = 'Light mode'), (a = Xa.a);
                break;
              default:
                (t = 'Auto'), (a = tn.a);
            }
            return i.a.createElement(Xt, {
              text: t,
              onClick: e.toggleTheme,
              icon: a,
            });
          });
        },
        nn = Object(N.a)({
          root: {
            height: Ht,
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
          },
          logoContainer: {
            width: Ht,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginLeft: 22,
            whiteSpace: 'nowrap',
            color: '#fff',
          },
          titleDot: { color: '#68c5b5' },
        }),
        rn = function () {
          var e = nn(),
            t = Object(r.useContext)(Gt);
          return i.a.createElement(
            'div',
            { className: e.root },
            i.a.createElement(
              q.a,
              { href: '/', underline: 'none' },
              i.a.createElement(
                I.a,
                { variant: 'h6', color: 'inherit', className: e.title },
                t ? 'Backstage' : 'B',
                i.a.createElement('span', { className: e.titleDot }, '.'),
              ),
            ),
          );
        },
        on = function (e) {
          var t = e.children;
          return i.a.createElement(
            Jt,
            null,
            i.a.createElement(
              Yt,
              null,
              i.a.createElement(rn, null),
              i.a.createElement(Kt, null),
              i.a.createElement(ea, null),
              i.a.createElement(Xt, { icon: Pa.a, to: '/', text: 'Home' }),
              i.a.createElement(Xt, {
                icon: za.a,
                to: '/explore',
                text: 'Explore',
              }),
              i.a.createElement(Xt, {
                icon: Za.a,
                to: '/create',
                text: 'Create...',
              }),
              i.a.createElement(ea, null),
              i.a.createElement(Xt, {
                icon: Va.a,
                to: '/inventory',
                text: 'Inventory',
              }),
              i.a.createElement(Xt, {
                icon: _a.a,
                to: '/login',
                text: 'Login',
              }),
              i.a.createElement(ea, null),
              i.a.createElement($t, null),
              i.a.createElement(an, null),
            ),
            t,
          );
        },
        ln = a(415),
        cn = a(104),
        sn = a.n(cn),
        un = a(407),
        dn = function (e) {
          var t = e.forwarder,
            a = Object(r.useState)([]),
            n = Object(c.a)(a, 2),
            o = n[0],
            l = n[1];
          if (
            (Object(r.useEffect)(
              function () {
                return t.subscribe(function (e) {
                  return l(function (t) {
                    return t.concat(e);
                  });
                });
              },
              [t],
            ),
            0 === o.length)
          )
            return null;
          var s = Object(c.a)(o, 1)[0];
          return i.a.createElement(
            ln.a,
            {
              open: !0,
              message: s.message.toString(),
              anchorOrigin: { vertical: 'top', horizontal: 'center' },
            },
            i.a.createElement(
              un.a,
              {
                action: i.a.createElement(
                  ee.a,
                  {
                    color: 'inherit',
                    size: 'small',
                    onClick: function () {
                      l(function (e) {
                        return e.filter(function (e) {
                          return e !== s;
                        });
                      });
                    },
                    'data-testid': 'error-button-close',
                  },
                  i.a.createElement(sn.a, null),
                ),
                severity: s.severity,
              },
              s.message.toString(),
            ),
          );
        },
        mn = a(396),
        hn = { hour: '2-digit', minute: '2-digit' },
        pn = Object(m.a)({ timeZone: 'UTC' }, hn),
        fn = Object(m.a)({ timeZone: 'America/New_York' }, hn),
        gn = Object(m.a)({ timeZone: 'Asia/Tokyo' }, hn),
        bn = Object(m.a)({ timeZone: 'Europe/Stockholm' }, hn),
        En = { timeNY: '', timeUTC: '', timeTYO: '', timeSTO: '' };
      function vn() {
        var e = new Date(),
          t = window.navigator.language;
        return {
          timeNY: e.toLocaleTimeString(t, fn),
          timeUTC: e.toLocaleTimeString(t, pn),
          timeTYO: e.toLocaleTimeString(t, gn),
          timeSTO: e.toLocaleTimeString(t, bn),
        };
      }
      var yn = function () {
          var e = i.a.useState(En),
            t = Object(c.a)(e, 2),
            a = t[0],
            n = a.timeNY,
            r = a.timeUTC,
            o = a.timeTYO,
            l = a.timeSTO,
            s = t[1];
          return (
            i.a.useEffect(function () {
              s(vn());
              var e = setInterval(function () {
                s(vn());
              }, 1e3);
              return function () {
                clearInterval(e);
              };
            }, []),
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(Pt, { label: 'NYC', value: n }),
              i.a.createElement(Pt, { label: 'UTC', value: r }),
              i.a.createElement(Pt, { label: 'STO', value: l }),
              i.a.createElement(Pt, { label: 'TYO', value: o }),
            )
          );
        },
        kn = function () {
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(I.a, { variant: 'h3' }, 'Team Metrics'),
            i.a.createElement(
              na,
              { scrollStep: 400, scrollSpeed: 100 },
              i.a.createElement(
                M.a,
                { item: !0 },
                i.a.createElement(sa, {
                  title: 'Test Certified',
                  progress: 0.23,
                  deepLink: { link: '/some-url', title: 'About Test Certs' },
                }),
              ),
              i.a.createElement(
                M.a,
                { item: !0 },
                i.a.createElement(sa, {
                  title: 'k8s Migration',
                  progress: 0.78,
                  deepLink: { link: '/some-url', title: 'About k8s' },
                }),
              ),
            ),
          );
        },
        On = [
          { id: 'backstage', kind: 'service' },
          { id: 'backstage-microsite', kind: 'website' },
        ],
        wn = function () {
          var e = On.map(function (e) {
              var t = e.id,
                a = e.kind;
              return {
                id: t,
                entity: i.a.createElement(
                  q.a,
                  { href: 'entity/'.concat(a, '/').concat(t) },
                  i.a.createElement(I.a, { color: 'primary' }, t),
                ),
                kind: i.a.createElement(I.a, null, a),
              };
            }),
            t = { givenName: 'Suzy' };
          return i.a.createElement(
            it,
            { theme: at.home },
            i.a.createElement(
              mt,
              {
                title: t ? 'Hello, '.concat(t.givenName) : 'Hello',
                subtitle: 'Welcome to Backstage',
              },
              i.a.createElement(yn, null),
            ),
            i.a.createElement(
              pt,
              null,
              i.a.createElement(
                M.a,
                { container: !0, direction: 'row', spacing: 3 },
                i.a.createElement(
                  M.a,
                  { item: !0, xs: 6 },
                  i.a.createElement(I.a, { variant: 'h3' }, 'Things you own'),
                  i.a.createElement(
                    jt,
                    null,
                    i.a.createElement(
                      mn.a,
                      null,
                      i.a.createElement(
                        le.a,
                        { size: 'small', 'aria-label': 'a dense table' },
                        i.a.createElement(
                          re.a,
                          null,
                          i.a.createElement(
                            ie.a,
                            null,
                            i.a.createElement(oe.a, null, 'ID'),
                            i.a.createElement(oe.a, null, 'Kind'),
                          ),
                        ),
                        i.a.createElement(
                          ce.a,
                          null,
                          e.map(function (e) {
                            return i.a.createElement(
                              ie.a,
                              { key: e.id },
                              i.a.createElement(oe.a, null, e.entity),
                              i.a.createElement(oe.a, null, e.kind),
                            );
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
                i.a.createElement(
                  M.a,
                  { item: !0, xs: 6 },
                  i.a.createElement(kn, null),
                ),
              ),
            ),
          );
        },
        xn = It({
          id: 'home-page',
          register: function (e) {
            e.router.registerRoute('/home', wn);
          },
        }),
        Cn = { hour: '2-digit', minute: '2-digit' },
        jn = Object(m.a)({ timeZone: 'UTC' }, Cn),
        Sn = Object(m.a)({ timeZone: 'America/New_York' }, Cn),
        Fn = Object(m.a)({ timeZone: 'Asia/Tokyo' }, Cn),
        Rn = Object(m.a)({ timeZone: 'Europe/Stockholm' }, Cn),
        Tn = { timeNY: '', timeUTC: '', timeTYO: '', timeSTO: '' };
      function Bn() {
        var e = new Date(),
          t = window.navigator.language;
        return {
          timeNY: e.toLocaleTimeString(t, Sn),
          timeUTC: e.toLocaleTimeString(t, jn),
          timeTYO: e.toLocaleTimeString(t, Fn),
          timeSTO: e.toLocaleTimeString(t, Rn),
        };
      }
      var Ln = function () {
          var e = i.a.useState(Tn),
            t = Object(c.a)(e, 2),
            a = t[0],
            n = a.timeNY,
            r = a.timeUTC,
            o = a.timeTYO,
            l = a.timeSTO,
            s = t[1];
          return (
            i.a.useEffect(function () {
              s(Bn());
              var e = setInterval(function () {
                s(Bn());
              }, 1e3);
              return function () {
                clearInterval(e);
              };
            }, []),
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(Pt, { label: 'NYC', value: n }),
              i.a.createElement(Pt, { label: 'UTC', value: r }),
              i.a.createElement(Pt, { label: 'STO', value: l }),
              i.a.createElement(Pt, { label: 'TYO', value: o }),
            )
          );
        },
        An = function () {
          var e = Ye($e);
          return i.a.createElement(
            Q.a,
            {
              'data-testid': 'error-button',
              variant: 'contained',
              color: 'primary',
              onClick: function () {
                e.post(new Error('Oh no!'));
              },
            },
            'Trigger an error!',
          );
        },
        Nn = function () {
          var e = Ye(We).getFlags(),
            t = e.get('enable-welcome-box');
          return i.a.createElement(
            Q.a,
            {
              variant: 'contained',
              color: 'secondary',
              onClick: function () {
                var a = t === y.On ? y.Off : y.On;
                e.set('enable-welcome-box', a), window.location.reload();
              },
              'data-testid': 'button-switch-feature-flag-state',
            },
            t === y.On
              ? 'Disable "enable-welcome-box" feature flag'
              : 'Enable "enable-welcome-box" feature flag',
          );
        },
        Mn = function () {
          return i.a.createElement(
            it,
            { theme: at.home },
            i.a.createElement(
              mt,
              {
                title: 'Welcome '.concat('to Backstage'),
                subtitle: 'Some quick intro and links.',
              },
              i.a.createElement(Ln, null),
            ),
            i.a.createElement(
              pt,
              null,
              i.a.createElement(
                bt,
                { title: 'Getting Started' },
                i.a.createElement(fa, null),
              ),
              i.a.createElement(
                M.a,
                { container: !0 },
                i.a.createElement(
                  M.a,
                  { item: !0, xs: 12, md: 6 },
                  i.a.createElement(
                    jt,
                    null,
                    i.a.createElement(
                      I.a,
                      { variant: 'body1', gutterBottom: !0 },
                      'You now have a running instance of Backstage!',
                      i.a.createElement(
                        'span',
                        { role: 'img', 'aria-label': 'confetti' },
                        '\ud83c\udf89',
                      ),
                      "Let's make sure you get the most out of this platform by walking you through the basics.",
                    ),
                    i.a.createElement(
                      I.a,
                      { variant: 'h6', gutterBottom: !0 },
                      'The Setup',
                    ),
                    i.a.createElement(
                      I.a,
                      { variant: 'body1', paragraph: !0 },
                      'Backstage is put together from three base concepts: the core, the app and the plugins.',
                    ),
                    i.a.createElement(
                      V.a,
                      null,
                      i.a.createElement(
                        P.a,
                        null,
                        i.a.createElement(H.a, {
                          primary:
                            'The core is responsible for base functionality.',
                        }),
                      ),
                      i.a.createElement(
                        P.a,
                        null,
                        i.a.createElement(H.a, {
                          primary:
                            'The app provides the base UI and connects the plugins.',
                        }),
                      ),
                      i.a.createElement(
                        P.a,
                        null,
                        i.a.createElement(H.a, {
                          primary:
                            'The plugins make Backstage useful for the end users with\n                  specific views and functionality.',
                        }),
                      ),
                    ),
                    i.a.createElement(
                      I.a,
                      { variant: 'h6', gutterBottom: !0 },
                      'Try It Out',
                    ),
                    i.a.createElement(
                      I.a,
                      { variant: 'body1', paragraph: !0 },
                      'We suggest you either check out the documentation for',
                      ' ',
                      i.a.createElement(
                        q.a,
                        {
                          href:
                            'https://github.com/spotify/backstage/blob/master/docs/getting-started/create-a-plugin.md',
                        },
                        'creating a plugin',
                      ),
                      ' ',
                      'or have a look in the code for the',
                      ' ',
                      i.a.createElement(
                        q.a,
                        { component: Da.b, to: '/home' },
                        'Home Page',
                      ),
                      ' ',
                      'in the directory "plugins/home-page/src".',
                    ),
                  ),
                ),
                i.a.createElement(
                  M.a,
                  { item: !0 },
                  i.a.createElement(
                    jt,
                    null,
                    i.a.createElement(I.a, { variant: 'h5' }, 'Quick Links'),
                    i.a.createElement(
                      V.a,
                      null,
                      i.a.createElement(
                        P.a,
                        null,
                        i.a.createElement(
                          q.a,
                          { href: 'https://backstage.io' },
                          'backstage.io',
                        ),
                      ),
                      i.a.createElement(
                        P.a,
                        null,
                        i.a.createElement(
                          q.a,
                          {
                            href:
                              'https://github.com/spotify/backstage/blob/master/docs/getting-started/create-a-plugin.md',
                          },
                          'Create a plugin',
                        ),
                      ),
                    ),
                  ),
                ),
                i.a.createElement(
                  M.a,
                  { item: !0 },
                  i.a.createElement(
                    jt,
                    { title: 'APIs' },
                    i.a.createElement(
                      I.a,
                      null,
                      'The button below is an example of how to consume APIs.',
                    ),
                    i.a.createElement('br', null),
                    i.a.createElement(An, null),
                    i.a.createElement('br', null),
                    i.a.createElement('br', null),
                    i.a.createElement(Nn, null),
                  ),
                ),
              ),
            ),
          );
        },
        In = It({
          id: 'welcome',
          register: function (e) {
            var t = e.router,
              a = e.featureFlags;
            t.registerRoute('/', Mn), a.register('enable-welcome-box');
          },
        }),
        qn = a(24),
        Dn = a.n(qn),
        Wn = a(50),
        Pn = a(417),
        Hn = a(397),
        zn = a(409),
        Un = a(398),
        _n = a(405),
        Gn = a(126),
        Zn = a.n(Gn),
        Yn = (function (e) {
          Object(R.a)(a, e);
          var t = Object(F.a)(a);
          function a() {
            return Object(B.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(L.a)(
              a,
              [
                {
                  key: 'name',
                  get: function () {
                    return this.constructor.name;
                  },
                },
              ],
              [
                {
                  key: 'forResponse',
                  value: (function () {
                    var e = Object(Wn.a)(
                      Dn.a.mark(function e(t) {
                        return Dn.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.t0 = a),
                                  (e.t1 = 'Request failed with status code '.concat(
                                    t.status,
                                    '.\nReason: ',
                                  )),
                                  (e.next = 4),
                                  t.text()
                                );
                              case 4:
                                return (
                                  (e.t2 = e.sent),
                                  (e.t3 = e.t1.concat.call(e.t1, e.t2)),
                                  e.abrupt('return', new e.t0(e.t3))
                                );
                              case 7:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
              ],
            ),
            a
          );
        })(Object(j.a)(Error)),
        Vn = new Ie({
          id: 'plugin.lighthouse.service',
          description: 'Used by the Lighthouse plugin to make requests',
        }),
        Jn = (function () {
          function e(t) {
            Object(B.a)(this, e), (this.url = t);
          }
          return (
            Object(L.a)(e, [
              {
                key: 'fetch',
                value: (function (e) {
                  function t(t, a) {
                    return e.apply(this, arguments);
                  }
                  return (
                    (t.toString = function () {
                      return e.toString();
                    }),
                    t
                  );
                })(
                  (function () {
                    var e = Object(Wn.a)(
                      Dn.a.mark(function e(t, a) {
                        var n;
                        return Dn.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    fetch(''.concat(this.url).concat(t), a)
                                  );
                                case 2:
                                  if ((n = e.sent).ok) {
                                    e.next = 7;
                                    break;
                                  }
                                  return (e.next = 6), Yn.forResponse(n);
                                case 6:
                                  throw e.sent;
                                case 7:
                                  return (e.next = 9), n.json();
                                case 9:
                                  return e.abrupt('return', e.sent);
                                case 10:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                        );
                      }),
                    );
                    return function (t, a) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              },
              {
                key: 'getWebsiteList',
                value: (function () {
                  var e = Object(Wn.a)(
                    Dn.a.mark(function e() {
                      var t,
                        a,
                        n,
                        r,
                        i = arguments;
                      return Dn.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                    i.length > 0 && void 0 !== i[0]
                                      ? i[0]
                                      : {}),
                                  (a = t.limit),
                                  (n = t.offset),
                                  (r = new URLSearchParams()),
                                  'number' === typeof a &&
                                    r.append('limit', a.toString()),
                                  'number' === typeof n &&
                                    r.append('offset', n.toString()),
                                  (e.next = 6),
                                  this.fetch(
                                    '/v1/websites?'.concat(r.toString()),
                                  )
                                );
                              case 6:
                                return e.abrupt('return', e.sent);
                              case 7:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'getWebsiteForAuditId',
                value: (function () {
                  var e = Object(Wn.a)(
                    Dn.a.mark(function e(t) {
                      return Dn.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.fetch(
                                    '/v1/audits/'.concat(
                                      encodeURIComponent(t),
                                      '/website',
                                    ),
                                  )
                                );
                              case 2:
                                return e.abrupt('return', e.sent);
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'triggerAudit',
                value: (function () {
                  var e = Object(Wn.a)(
                    Dn.a.mark(function e(t) {
                      return Dn.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.fetch('/v1/audits', {
                                    method: 'POST',
                                    body: JSON.stringify(t),
                                    headers: {
                                      'Content-Type': 'application/json',
                                    },
                                  })
                                );
                              case 2:
                                return e.abrupt('return', e.sent);
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })();
      function Qn() {
        return new URLSearchParams(Object(A.h)().search);
      }
      function Xn(e) {
        return (e instanceof Date ? e : new Date(e)).toUTCString();
      }
      var $n = ['accessibility', 'performance', 'seo', 'best-practices'],
        Kn = {
          accessibility: 'Accessibility',
          performance: 'Performance',
          seo: 'SEO',
          'best-practices': 'Best Practices',
          pwa: 'Progressive Web App',
        };
      function er(e) {
        return e.audits
          .filter(function (e) {
            return 'COMPLETED' === e.status;
          })
          .reduce(function (e, t) {
            return (
              Object.values(t.categories).forEach(function (t) {
                (e[t.id] = e[t.id] || []), e[t.id].unshift(t.score);
              }),
              Object.values(e).forEach(function (e) {
                1 === e.length && e.push(e[0]);
              }),
              e
            );
          }, {});
      }
      function tr() {
        return i.a.createElement(
          fa,
          null,
          'Lighthouse audits run for any web domain, stored over time.',
        );
      }
      var ar = Object(N.a)(function (e) {
        return {
          tabs: { marginBottom: -18 },
          tab: { minWidth: 72, paddingLeft: 1, paddingRight: 1 },
          content: { marginBottom: e.spacing(2) },
          closeButtonContainer: { height: '100%' },
          closeButtonItem: { paddingBottom: 0 },
        };
      });
      function nr() {
        var e = ar(),
          t = Object(r.useState)(0),
          a = Object(c.a)(t, 2),
          n = a[0],
          o = a[1];
        return i.a.createElement(
          jt,
          {
            title: 'Get started',
            subheader: i.a.createElement(
              X.a,
              {
                value: n,
                indicatorColor: 'primary',
                textColor: 'primary',
                onChange: function (e, t) {
                  return o(t);
                },
                'aria-label': 'get started tabs',
                className: e.tabs,
              },
              i.a.createElement($.a, { className: e.tab, label: 'Use cases' }),
              i.a.createElement($.a, { className: e.tab, label: 'Setup' }),
            ),
            divider: !0,
            actions: i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(
                M.a,
                { container: !0, direction: 'row', justify: 'flex-end' },
                i.a.createElement(
                  M.a,
                  { item: !0 },
                  i.a.createElement(
                    Q.a,
                    {
                      component: 'a',
                      href:
                        'https://github.com/spotify/lighthouse-audit-service',
                      size: 'small',
                      target: '_blank',
                    },
                    'Check out the README',
                  ),
                ),
              ),
            ),
          },
          0 === n &&
            i.a.createElement(Zn.a, {
              source:
                "\nGoogle's [Lighthouse](https://developers.google.com/web/tools/lighthouse) auditing tool for websites\nis a great open-source resource forbenchmarking and improving the accessibility, performance, SEO, and best practices of your site.\nAt Spotify, we keep track of Lighthouse audit scores over time to look at trends and overall areas for investment.\n\nThis plugin allows you to generate on-demand Lighthouse audits for websites, and to track the trends for the\ntop-level categories of Lighthouse at a glance.\n\nIn the future, we hope to add support for scheduling audits (which we do internally), as well as allowing\ncustom runs of Lighthouse to be ingested (for auditing sites that require authentication or some session state).\n",
            }),
          1 === n &&
            i.a.createElement(Zn.a, {
              source:
                "\nTo get started, you will need a running instance of [lighthouse-audit-service](https://github.com/spotify/lighthouse-audit-service).\n_It's likely you will need to enable CORS when running lighthouse-audit-service. Initialize the app\nwith the environment variable `LAS_CORS` set to `true`._\n\nWhen you have an instance running that Backstage can hook into, make sure to export the plugin in\nyour app's [`plugins.ts`](https://github.com/spotify/backstage/blob/master/packages/app/src/plugins.ts)\nto enable the plugin:\n\n```js\nimport { default as LighthousePlugin } from '@backstage/plugin-lighthouse';\nexport LighthousePlugin;\n```\n\nThen, you need to use the `lighthouseApiRef` exported from the plugin to initialize the Rest API in\nyour [`apis.ts`](https://github.com/spotify/backstage/blob/master/packages/app/src/apis.ts).\n\n```js\nimport { ApiHolder, ApiRegistry } from '@backstage/core';\nimport {\n  lighthouseApiRef,\n  LighthouseRestApi,\n} from '@backstage/plugin-lighthouse';\n\nconst builder = ApiRegistry.builder();\n\nexport const lighthouseApi =\n  new LighthouseRestApi(/* your service url here! */);\nbuilder.add(lighthouseApiRef, lighthouseApi);\n\nexport default builder.build() as ApiHolder;\n```\n",
            }),
        );
      }
      function rr(e) {
        var t = e.onDismiss,
          a = void 0 === t ? function () {} : t,
          n = ar(),
          r = Object(Pn.a)('@backstage/lighthouse-plugin/intro-dismissed', !1),
          o = Object(c.a)(r, 2),
          l = o[0],
          s = o[1];
        return l
          ? null
          : i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(
                bt,
                { title: 'Welcome to Lighthouse in Backstage!' },
                i.a.createElement(tr, null),
              ),
              i.a.createElement(
                M.a,
                {
                  className: n.content,
                  container: !0,
                  spacing: 3,
                  direction: 'row',
                },
                i.a.createElement(
                  M.a,
                  { item: !0, xs: 12, sm: 6, md: 4 },
                  i.a.createElement(nr, null),
                ),
                i.a.createElement(
                  M.a,
                  { item: !0, xs: 12, sm: 6, md: 8 },
                  i.a.createElement(
                    M.a,
                    {
                      container: !0,
                      justify: 'flex-end',
                      alignItems: 'flex-end',
                      className: n.closeButtonContainer,
                    },
                    i.a.createElement(
                      M.a,
                      { item: !0, className: n.closeButtonItem },
                      i.a.createElement(
                        Q.a,
                        {
                          variant: 'text',
                          onClick: function () {
                            a(), s(!0);
                          },
                        },
                        i.a.createElement(sn.a, null),
                        ' Hide intro',
                      ),
                    ),
                  ),
                ),
              ),
            );
      }
      var ir = function (e) {
          var t = e.audit;
          return 'FAILED' === t.status
            ? i.a.createElement(Ia, null)
            : 'COMPLETED' === t.status
            ? i.a.createElement(Ma, null)
            : i.a.createElement(qa, null);
        },
        or = Object(N.a)(function (e) {
          return {
            table: { minWidth: 650 },
            status: { textTransform: 'capitalize' },
            link: {
              paddingTop: e.spacing(2),
              paddingBottom: e.spacing(2),
              display: 'inline-block',
            },
            statusCell: { whiteSpace: 'nowrap' },
            sparklinesCell: { minWidth: 120 },
          };
        }),
        lr = function (e) {
          var t = e.website,
            a = e.categorySparkline,
            n = or();
          return i.a.createElement(
            ie.a,
            { key: t.url },
            i.a.createElement(
              oe.a,
              null,
              i.a.createElement(
                q.a,
                {
                  className: n.link,
                  href: '/lighthouse/audit/'.concat(t.lastAudit.id),
                },
                t.url,
              ),
            ),
            $n.map(function (e) {
              return i.a.createElement(
                oe.a,
                {
                  key: ''.concat(t.url, '|').concat(e),
                  className: n.sparklinesCell,
                },
                i.a.createElement(Aa, {
                  title: 'trendline for '
                    .concat(Kn[e], ' category of ')
                    .concat(t.url),
                  data: a[e] || [],
                }),
              );
            }),
            i.a.createElement(
              oe.a,
              { className: n.statusCell },
              i.a.createElement(ir, { audit: t.lastAudit }),
              ' ',
              i.a.createElement(
                'span',
                { className: n.status },
                t.lastAudit.status.toLowerCase(),
              ),
            ),
            i.a.createElement(oe.a, null, Xn(t.lastAudit.timeCreated)),
          );
        },
        cr = function (e) {
          var t = e.website,
            a = e.categorySparkline,
            n = Ye(Vn),
            o = Object(r.useState)(t),
            l = Object(c.a)(o, 2),
            s = l[0],
            u = l[1],
            d = Object(r.useState)(a),
            m = Object(c.a)(d, 2),
            h = m[0],
            p = m[1],
            f = (function () {
              var e = Object(Wn.a)(
                Dn.a.mark(function e() {
                  var t, a;
                  return Dn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), n.getWebsiteForAuditId(s.lastAudit.id)
                          );
                        case 2:
                          (t = e.sent),
                            ('COMPLETED' !== (a = t.lastAudit.status) &&
                              'FAILED' !== a) ||
                              (p(er(t)), u(t));
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(Hn.a)(
              f,
              'RUNNING' ===
                (null === s || void 0 === s ? void 0 : s.lastAudit.status)
                ? 5e3
                : null,
            ),
            i.a.createElement(lr, { website: s, categorySparkline: h })
          );
        },
        sr = Object(N.a)(function (e) {
          return {
            table: { minWidth: 650 },
            status: { textTransform: 'capitalize' },
            link: {
              paddingTop: e.spacing(2),
              paddingBottom: e.spacing(2),
              display: 'inline-block',
            },
            statusCell: { whiteSpace: 'nowrap' },
            sparklinesCell: { minWidth: 120 },
          };
        }),
        ur = function (e) {
          var t = e.items,
            a = sr(),
            n = Object(r.useMemo)(
              function () {
                return t.reduce(function (e, t) {
                  return Object(m.a)({}, e, Object(h.a)({}, t.url, er(t)));
                }, {});
              },
              [t],
            );
          return i.a.createElement(
            mn.a,
            null,
            i.a.createElement(
              le.a,
              {
                className: a.table,
                size: 'small',
                'aria-label': 'a dense table',
              },
              i.a.createElement(
                re.a,
                null,
                i.a.createElement(
                  ie.a,
                  null,
                  i.a.createElement(oe.a, null, 'Website URL'),
                  $n.map(function (e) {
                    return i.a.createElement(
                      oe.a,
                      { key: ''.concat(e, '-label') },
                      Kn[e],
                    );
                  }),
                  i.a.createElement(oe.a, null, 'Last Report'),
                  i.a.createElement(oe.a, null, 'Last Audit Triggered'),
                ),
              ),
              i.a.createElement(
                ce.a,
                null,
                t.map(function (e) {
                  return i.a.createElement(cr, {
                    key: e.url,
                    website: e,
                    categorySparkline: n[e.url],
                  });
                }),
              ),
            ),
          );
        },
        dr = function () {
          var e = Object(Pn.a)('@backstage/lighthouse-plugin/intro-dismissed'),
            t = Object(c.a)(e, 1)[0],
            a = Object(r.useState)(t),
            n = Object(c.a)(a, 2),
            o = n[0],
            l = n[1],
            s = Qn(),
            u = (s.get('page') && parseInt(s.get('page'), 10)) || 1,
            d = Ye(Vn),
            m = Object(zn.a)(
              Object(Wn.a)(
                Dn.a.mark(function e() {
                  return Dn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            d.getWebsiteList({
                              limit: 10,
                              offset: 10 * (u - 1),
                            })
                          );
                        case 2:
                          return e.abrupt('return', e.sent);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
              [u],
            ),
            h = m.value,
            p = m.loading,
            f = m.error,
            g = Object(r.useMemo)(
              function () {
                return (null === h || void 0 === h ? void 0 : h.total) &&
                  (null === h || void 0 === h ? void 0 : h.limit)
                  ? Math.ceil(
                      (null === h || void 0 === h ? void 0 : h.total) /
                        (null === h || void 0 === h ? void 0 : h.limit),
                    )
                  : 0;
              },
              [h],
            ),
            b = Object(A.g)(),
            E = null;
          return (
            h
              ? (E = i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(ur, {
                    items:
                      (null === h || void 0 === h ? void 0 : h.items) || [],
                  }),
                  g > 1 &&
                    i.a.createElement(_n.a, {
                      page: u,
                      count: g,
                      onChange: function (e, t) {
                        b.replace('/lighthouse?page='.concat(t));
                      },
                    }),
                ))
              : p
              ? (E = i.a.createElement(ua, null))
              : f &&
                (E = i.a.createElement(
                  un.a,
                  { severity: 'error', 'data-testid': 'error-message' },
                  f.message,
                )),
            i.a.createElement(
              it,
              { theme: at.tool },
              i.a.createElement(
                mt,
                {
                  title: 'Lighthouse',
                  subtitle: 'Website audits powered by Lighthouse',
                },
                i.a.createElement(Pt, { label: 'Owner', value: 'Spotify' }),
                i.a.createElement(Pt, { label: 'Lifecycle', value: 'Alpha' }),
              ),
              i.a.createElement(
                pt,
                null,
                i.a.createElement(rr, {
                  onDismiss: function () {
                    return l(!0);
                  },
                }),
                i.a.createElement(
                  bt,
                  {
                    title: 'Audits',
                    description:
                      'View all audits run for your website through Backstage here. Track the trend of your most recent audits.',
                  },
                  i.a.createElement(
                    Q.a,
                    {
                      variant: 'contained',
                      color: 'primary',
                      href: '/lighthouse/create-audit',
                    },
                    'Create Audit',
                  ),
                  o && i.a.createElement(tr, null),
                ),
                i.a.createElement(
                  M.a,
                  { container: !0, spacing: 3, direction: 'column' },
                  i.a.createElement(
                    M.a,
                    { item: !0 },
                    i.a.createElement(jt, null, E),
                  ),
                ),
              ),
            )
          );
        },
        mr = Object(N.a)({
          contentGrid: { height: '100%' },
          iframe: { border: '0', width: '100%', height: '100%' },
          errorOutput: { whiteSpace: 'pre' },
        }),
        hr = function (e) {
          var t = e.audits,
            a = void 0 === t ? [] : t,
            n = e.selectedId;
          return i.a.createElement(
            V.a,
            {
              'data-testid': 'audit-sidebar',
              component: 'nav',
              'aria-label': 'lighthouse audit history',
            },
            a.map(function (e) {
              return i.a.createElement(
                P.a,
                {
                  key: e.id,
                  selected: e.id === n,
                  button: !0,
                  component: Da.b,
                  replace: !0,
                  to: '/lighthouse/audit/'.concat(e.id),
                },
                i.a.createElement(
                  z.a,
                  null,
                  i.a.createElement(ir, { audit: e }),
                ),
                i.a.createElement(H.a, { primary: Xn(e.timeCreated) }),
              );
            }),
          );
        },
        pr = function (e) {
          var t = e.audit,
            a = mr(),
            n = Object(A.i)(),
            r = Ye(Vn).url;
          return 'RUNNING' === (null === t || void 0 === t ? void 0 : t.status)
            ? i.a.createElement(ua, null)
            : 'FAILED' === (null === t || void 0 === t ? void 0 : t.status)
            ? i.a.createElement(
                un.a,
                { severity: 'error' },
                'This audit failed when attempting to run after several retries. Check that your instance of lighthouse-audit-service can successfully connect to your website and try again.',
              )
            : i.a.createElement(
                jt,
                { variant: 'fullHeight' },
                i.a.createElement('iframe', {
                  className: a.iframe,
                  title: 'Lighthouse audit'.concat(
                    (null === t || void 0 === t ? void 0 : t.url)
                      ? ' for '.concat(t.url)
                      : '',
                  ),
                  src: ''
                    .concat(r, '/v1/audits/')
                    .concat(encodeURIComponent(n.id)),
                }),
              );
        },
        fr = function () {
          var e = Ye(Vn),
            t = Object(A.i)(),
            a = mr(),
            n = Object(zn.a)(
              Object(Wn.a)(
                Dn.a.mark(function a() {
                  return Dn.a.wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.next = 2), e.getWebsiteForAuditId(t.id);
                        case 2:
                          return a.abrupt('return', a.sent);
                        case 3:
                        case 'end':
                          return a.stop();
                      }
                  }, a);
                }),
              ),
              [t.id],
            ),
            o = n.loading,
            l = n.error,
            s = n.value,
            u = Object(r.useState)(),
            d = Object(c.a)(u, 2),
            m = d[0],
            h = d[1];
          Object(r.useEffect)(
            function () {
              s &&
                s.url !== (null === m || void 0 === m ? void 0 : m.url) &&
                h(s);
            },
            [m, s, h],
          );
          var p = null;
          m
            ? (p = i.a.createElement(
                M.a,
                {
                  container: !0,
                  alignItems: 'stretch',
                  className: a.contentGrid,
                },
                i.a.createElement(
                  M.a,
                  { item: !0, xs: 3 },
                  i.a.createElement(hr, {
                    audits: null === m || void 0 === m ? void 0 : m.audits,
                    selectedId: t.id,
                  }),
                ),
                i.a.createElement(
                  M.a,
                  { item: !0, xs: 9 },
                  i.a.createElement(pr, {
                    audit:
                      null === m || void 0 === m
                        ? void 0
                        : m.audits.find(function (e) {
                            return e.id === t.id;
                          }),
                  }),
                ),
              ))
            : o
            ? (p = i.a.createElement(ua, null))
            : l &&
              (p = i.a.createElement(
                un.a,
                {
                  'data-testid': 'error-message',
                  severity: 'error',
                  className: a.errorOutput,
                },
                l.message,
              ));
          var f = '/lighthouse/create-audit';
          return (
            (null === m || void 0 === m ? void 0 : m.url) &&
              (f += '?url='.concat(encodeURIComponent(m.url))),
            i.a.createElement(
              it,
              { theme: at.tool },
              i.a.createElement(
                mt,
                {
                  title: 'Lighthouse',
                  subtitle: 'Website audits powered by Lighthouse',
                },
                i.a.createElement(Pt, { label: 'Owner', value: 'Spotify' }),
                i.a.createElement(Pt, { label: 'Lifecycle', value: 'Alpha' }),
              ),
              i.a.createElement(
                pt,
                { stretch: !0 },
                i.a.createElement(
                  bt,
                  {
                    title:
                      (null === m || void 0 === m ? void 0 : m.url) || 'Audit',
                    description:
                      'See a history of all Lighthouse audits for your website run through Backstage.',
                  },
                  i.a.createElement(
                    Q.a,
                    { variant: 'contained', color: 'primary', href: f },
                    'Create Audit',
                  ),
                  i.a.createElement(tr, null),
                ),
                p,
              ),
            )
          );
        },
        gr = Object(N.a)(function (e) {
          return {
            input: { minWidth: 300 },
            buttonList: {
              marginLeft: e.spacing(-1),
              marginRight: e.spacing(-1),
              '& > *': { margin: e.spacing(1) },
            },
          };
        }),
        br = function () {
          var e = Ye($e),
            t = Ye(Vn),
            a = gr(),
            n = Qn(),
            o = Object(A.g)(),
            l = Object(r.useState)(!1),
            s = Object(c.a)(l, 2),
            u = s[0],
            d = s[1],
            m = Object(r.useState)(n.get('url') || ''),
            h = Object(c.a)(m, 2),
            p = h[0],
            f = h[1],
            g = Object(r.useState)('mobile'),
            b = Object(c.a)(g, 2),
            E = b[0],
            v = b[1],
            y = Object(r.useCallback)(
              Object(Wn.a)(
                Dn.a.mark(function a() {
                  return Dn.a.wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              d(!0),
                              (a.prev = 1),
                              (a.next = 4),
                              t.triggerAudit({
                                url: p,
                                options: {
                                  lighthouseConfig: {
                                    settings: { emulatedFormFactor: E },
                                  },
                                },
                              })
                            );
                          case 4:
                            o.push('/lighthouse'), (a.next = 10);
                            break;
                          case 7:
                            (a.prev = 7), (a.t0 = a.catch(1)), e.post(a.t0);
                          case 10:
                            return (a.prev = 10), d(!1), a.finish(10);
                          case 13:
                          case 'end':
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 7, 10, 13]],
                  );
                }),
              ),
              [p, E, t, d, e, o],
            );
          return i.a.createElement(
            it,
            { theme: at.tool },
            i.a.createElement(
              mt,
              {
                title: 'Lighthouse',
                subtitle: 'Website audits powered by Lighthouse',
              },
              i.a.createElement(Pt, { label: 'Owner', value: 'Spotify' }),
              i.a.createElement(Pt, { label: 'Lifecycle', value: 'Alpha' }),
            ),
            i.a.createElement(
              pt,
              null,
              i.a.createElement(
                bt,
                {
                  title: 'Trigger a new audit',
                  description:
                    "Submitting this form will immediately trigger and store a new Lighthouse audit. Trigger audits to track your website's accessibility, performance, SEO, and best practices over time.",
                },
                i.a.createElement(tr, null),
              ),
              i.a.createElement(
                M.a,
                { container: !0, direction: 'column' },
                i.a.createElement(
                  M.a,
                  { item: !0, xs: 12, sm: 6 },
                  i.a.createElement(
                    jt,
                    null,
                    i.a.createElement(
                      'form',
                      {
                        onSubmit: function (e) {
                          e.preventDefault(), y();
                        },
                      },
                      i.a.createElement(
                        V.a,
                        null,
                        i.a.createElement(
                          P.a,
                          null,
                          i.a.createElement(J.a, {
                            name: 'lighthouse-create-audit-url-tf',
                            className: a.input,
                            label: 'URL',
                            placeholder: 'https://spotify.com',
                            helperText: 'The target URL for Lighthouse to use.',
                            required: !0,
                            disabled: u,
                            onChange: function (e) {
                              return f(e.target.value);
                            },
                            value: p,
                            inputProps: { 'aria-label': 'URL' },
                          }),
                        ),
                        i.a.createElement(
                          P.a,
                          null,
                          i.a.createElement(
                            J.a,
                            {
                              name:
                                'lighthouse-create-audit-emulated-form-factor-tf',
                              className: a.input,
                              label: 'Emulated Form Factor',
                              helperText: 'Device to simulate when auditing',
                              select: !0,
                              required: !0,
                              disabled: u,
                              onChange: function (e) {
                                return v(e.target.value);
                              },
                              value: E,
                              inputProps: {
                                'aria-label': 'Emulated form factor',
                              },
                            },
                            i.a.createElement(
                              Un.a,
                              { value: 'mobile' },
                              'Mobile',
                            ),
                            i.a.createElement(
                              Un.a,
                              { value: 'desktop' },
                              'Desktop',
                            ),
                          ),
                        ),
                        i.a.createElement(
                          P.a,
                          { className: a.buttonList },
                          i.a.createElement(
                            Q.a,
                            {
                              variant: 'outlined',
                              color: 'primary',
                              href: '/lighthouse',
                              disabled: u,
                            },
                            'Cancel',
                          ),
                          i.a.createElement(
                            Q.a,
                            {
                              variant: 'contained',
                              color: 'primary',
                              type: 'submit',
                              disabled: u,
                            },
                            'Create Audit',
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        },
        Er = It({
          id: 'lighthouse',
          register: function (e) {
            var t = e.router;
            t.registerRoute('/lighthouse', dr),
              t.registerRoute('/lighthouse/audit/:id', fr),
              t.registerRoute('/lighthouse/create-audit', br);
          },
        }),
        vr = [
          { id: 'backstage-frontend', kind: 'website' },
          { id: 'backstage-backend', kind: 'service' },
          { id: 'backstage-microsite', kind: 'website' },
        ],
        yr = function () {
          return i.a.createElement(
            it,
            { theme: at.home },
            i.a.createElement(mt, {
              title: 'Inventory',
              subtitle: 'All your stuff',
            }),
            i.a.createElement(
              pt,
              null,
              i.a.createElement(I.a, { variant: 'h3' }, 'All of it'),
              i.a.createElement(
                jt,
                null,
                i.a.createElement(
                  mn.a,
                  null,
                  i.a.createElement(
                    le.a,
                    { size: 'small', 'aria-label': 'a dense table' },
                    i.a.createElement(
                      re.a,
                      null,
                      i.a.createElement(
                        ie.a,
                        null,
                        i.a.createElement(oe.a, null, 'ID'),
                        i.a.createElement(oe.a, null, 'Kind'),
                      ),
                    ),
                    i.a.createElement(
                      ce.a,
                      null,
                      vr.map(function (e) {
                        return i.a.createElement(
                          ie.a,
                          { key: e.id },
                          i.a.createElement(oe.a, null, e.id),
                          i.a.createElement(oe.a, null, e.kind),
                        );
                      }),
                    ),
                  ),
                ),
              ),
            ),
          );
        },
        kr = It({
          id: 'inventory',
          register: function (e) {
            e.router.registerRoute('/inventory', yr);
          },
        }),
        Or = [
          {
            id: 'react-ssr-template',
            name: 'SSR React Website',
            description:
              'Next.js application skeleton for creating isomorphic web applications.',
            ownerId: 'something',
          },
        ],
        wr = function () {
          return i.a.createElement(
            it,
            { theme: at.home },
            i.a.createElement(mt, {
              title: i.a.createElement(
                i.a.Fragment,
                null,
                'Create a new component ',
                i.a.createElement(ha, { isShorthand: !0 }),
                ' ',
              ),
              subtitle:
                'Create new software components using standard templates',
            }),
            i.a.createElement(
              pt,
              null,
              i.a.createElement(bt, { title: 'Available templates' }),
              i.a.createElement(
                I.a,
                {
                  variant: 'body2',
                  paragraph: !0,
                  style: { fontStyle: 'italic' },
                },
                i.a.createElement('strong', null, 'NOTE!'),
                ' This feature is WIP. You can follow progress',
                ' ',
                i.a.createElement(
                  q.a,
                  { href: 'https://github.com/spotify/backstage/milestone/11' },
                  'here',
                ),
                '.',
              ),
              i.a.createElement(
                'div',
                { style: { display: 'flex' } },
                Or.map(function (e, t) {
                  return i.a.createElement(
                    jt,
                    {
                      title: e.name,
                      deepLink: { title: 'Create', link: '#' },
                      key: t,
                    },
                    i.a.createElement(I.a, { paragraph: !0 }, e.description),
                  );
                }),
              ),
            ),
          );
        },
        xr = It({
          id: 'scaffolder',
          register: function (e) {
            e.router.registerRoute('/create', wr);
          },
        }),
        Cr = a(127),
        jr = a(172),
        Sr = a.n(jr),
        Fr = {
          id: pe.a.string.isRequired,
          idx: pe.a.number,
          name: pe.a.string.isRequired,
          color: pe.a.string.isRequired,
        },
        Rr = {
          id: pe.a.string.isRequired,
          idx: pe.a.number,
          name: pe.a.string.isRequired,
        },
        Tr = {
          id: pe.a.string.isRequired,
          idx: pe.a.number,
          quadrant: pe.a.shape(Rr).isRequired,
          ring: pe.a.shape(Fr).isRequired,
          title: pe.a.string.isRequired,
          url: pe.a.string,
          moved: pe.a.number,
        },
        Br =
          (Object.assign({}, Tr, {
            quadrant: pe.a.string.isRequired,
            ring: pe.a.string.isRequired,
          }),
          (function (e) {
            Object(R.a)(a, e);
            var t = Object(F.a)(a);
            function a() {
              return Object(B.a)(this, a), t.apply(this, arguments);
            }
            return (
              Object(L.a)(a, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.radius,
                      a = e.rings,
                      n = e.classes,
                      r = [
                        i.a.createElement('line', {
                          key: 'x',
                          x1: 0,
                          y1: -t,
                          x2: 0,
                          y2: t,
                          className: n.axis,
                        }),
                        i.a.createElement('line', {
                          key: 'y',
                          x1: -t,
                          y1: 0,
                          x2: t,
                          y2: 0,
                          className: n.axis,
                        }),
                      ],
                      o = a
                        .map(function (e) {
                          return e.outerRadius;
                        })
                        .map(function (e, t) {
                          return [
                            i.a.createElement('circle', {
                              key: 'c'.concat(t),
                              cx: 0,
                              cy: 0,
                              r: e,
                              className: n.ring,
                            }),
                            i.a.createElement(
                              'text',
                              {
                                key: 't'.concat(t),
                                y: 42 - e,
                                textAnchor: 'middle',
                                className: n.text,
                              },
                              a[t].name,
                            ),
                          ];
                        });
                    return r.concat(o);
                  },
                },
              ]),
              a
            );
          })(i.a.PureComponent));
      Br.propTypes = {
        radius: pe.a.number.isRequired,
        rings: pe.a.arrayOf(pe.a.shape(Fr)).isRequired,
        classes: pe.a.object.isRequired,
      };
      var Lr = Object(U.a)({
          ring: { fill: 'none', stroke: '#bbb', strokeWidth: '1px' },
          axis: { fill: 'none', stroke: '#bbb', strokeWidth: '1px' },
          text: {
            pointerEvents: 'none',
            userSelect: 'none',
            fill: '#e5e5e5',
            fontSize: '25px',
            fontWeight: 800,
          },
        })(Br),
        Ar = (function (e) {
          Object(R.a)(a, e);
          var t = Object(F.a)(a);
          function a() {
            return Object(B.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(L.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.moved,
                    n = t.color,
                    r = t.url,
                    o = t.number,
                    l = t.x,
                    c = t.y,
                    s = t.onMouseEnter,
                    u = t.onMouseLeave,
                    d = t.onClick,
                    m = t.classes,
                    h = { fill: n };
                  return (
                    (e =
                      a > 0
                        ? i.a.createElement('path', {
                            d: 'M -11,5 11,5 0,-13 z',
                            style: h,
                          })
                        : a < 0
                        ? i.a.createElement('path', {
                            d: 'M -11,-5 11,-5 0,13 z',
                            style: h,
                          })
                        : i.a.createElement('circle', { r: 9, style: h })),
                    r &&
                      (e = i.a.createElement(
                        'a',
                        { href: r, className: m.link },
                        e,
                      )),
                    i.a.createElement(
                      'g',
                      {
                        transform: 'translate('.concat(l, ', ').concat(c, ')'),
                        onMouseEnter: s,
                        onMouseLeave: u,
                        onClick: d,
                      },
                      e,
                      i.a.createElement('text', { y: 3, className: m.text }, o),
                    )
                  );
                },
              },
            ]),
            a
          );
        })(i.a.PureComponent);
      Ar.propTypes = {
        x: pe.a.number.isRequired,
        y: pe.a.number.isRequired,
        number: pe.a.number.isRequired,
        color: pe.a.string.isRequired,
        url: pe.a.string,
        moved: pe.a.number,
        onMouseEnter: pe.a.func,
        onMouseLeave: pe.a.func,
        onClick: pe.a.func,
        classes: pe.a.object.isRequired,
      };
      var Nr = Object(U.a)({
          text: {
            pointerEvents: 'none',
            userSelect: 'none',
            fontSize: '9px',
            fill: '#fff',
            textAnchor: 'middle',
          },
          link: { cursor: 'pointer' },
        })(Ar),
        Mr = (function (e) {
          Object(R.a)(a, e);
          var t = Object(F.a)(a);
          function a() {
            var e;
            return (
              Object(B.a)(this, a),
              ((e = t.apply(this, arguments))._setRect = function (t) {
                e.rect = t;
              }),
              (e._setNode = function (t) {
                e.node = t;
              }),
              (e._setText = function (t) {
                e.text = t;
              }),
              (e._setPath = function (t) {
                e.path = t;
              }),
              e
            );
          }
          return (
            Object(L.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._updatePosition();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this._updatePosition();
                },
              },
              {
                key: '_updatePosition',
                value: function () {
                  if (this.text) {
                    var e = this.props,
                      t = e.x,
                      a = e.y,
                      n = this.text.getBBox();
                    this.node.setAttribute(
                      'transform',
                      'translate('
                        .concat(t - n.width / 2, ', ')
                        .concat(a - n.height - 4, ')'),
                    ),
                      this.rect.setAttribute('x', -5),
                      this.rect.setAttribute('y', -n.height),
                      this.rect.setAttribute('width', n.width + 10),
                      this.rect.setAttribute('height', n.height + 4),
                      this.path.setAttribute(
                        'transform',
                        'translate('
                          .concat(n.width / 2 - 5, ', ')
                          .concat(3, ')'),
                      );
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.visible,
                    a = e.text,
                    n = e.classes;
                  return i.a.createElement(
                    'g',
                    {
                      ref: this._setNode,
                      x: 0,
                      y: 0,
                      className: t ? n.visibleBubble : n.bubble,
                    },
                    i.a.createElement('rect', {
                      ref: this._setRect,
                      rx: 4,
                      ry: 4,
                      className: n.background,
                    }),
                    i.a.createElement(
                      'text',
                      { ref: this._setText, className: n.text },
                      a,
                    ),
                    i.a.createElement('path', {
                      ref: this._setPath,
                      d: 'M 0,0 10,0 5,8 z',
                      className: n.background,
                    }),
                  );
                },
              },
            ]),
            a
          );
        })(i.a.PureComponent);
      Mr.propTypes = {
        visible: pe.a.bool.isRequired,
        text: pe.a.string.isRequired,
        x: pe.a.number.isRequired,
        y: pe.a.number.isRequired,
        classes: pe.a.object.isRequired,
      };
      var Ir = Object(U.a)({
          bubble: { pointerEvents: 'none', userSelect: 'none', opacity: 0 },
          visibleBubble: {
            pointerEvents: 'none',
            userSelect: 'none',
            opacity: 0.8,
          },
          background: { fill: '#333' },
          text: {
            pointerEvents: 'none',
            userSelect: 'none',
            fontSize: '10px',
            fill: '#fff',
          },
        })(Mr),
        qr = (function (e) {
          Object(R.a)(a, e);
          var t = Object(F.a)(a);
          function a() {
            return Object(B.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(L.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.x,
                    a = e.y,
                    n = e.classes;
                  return i.a.createElement(
                    'text',
                    {
                      transform: 'translate('.concat(t, ', ').concat(a, ')'),
                      space: 'preserve',
                      className: n.text,
                    },
                    '\u25b2 moved up\xa0\xa0\xa0\xa0\xa0\u25bc moved down',
                  );
                },
              },
            ]),
            a
          );
        })(i.a.PureComponent);
      qr.propTypes = {
        x: pe.a.number.isRequired,
        y: pe.a.number.isRequired,
        classes: pe.a.object.isRequired,
      };
      var Dr = Object(U.a)({
          text: {
            pointerEvents: 'none',
            userSelect: 'none',
            fontSize: '10px',
            fill: '#000',
          },
        })(qr),
        Wr = (function (e) {
          Object(R.a)(a, e);
          var t = Object(F.a)(a);
          function a() {
            return Object(B.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(L.a)(
              a,
              [
                {
                  key: 'render',
                  value: function () {
                    var e,
                      t = this.props,
                      n = t.quadrants,
                      r = t.rings,
                      o = t.entries,
                      l = t.onEntryMouseEnter,
                      c = t.onEntryMouseLeave,
                      s = t.classes,
                      u = {},
                      d = Object(S.a)(o);
                    try {
                      for (d.s(); !(e = d.n()).done; ) {
                        var m = e.value,
                          h = m.quadrant.idx,
                          p = m.ring.idx,
                          f = u[h] || (u[h] = {});
                        (f[p] || (f[p] = [])).push(m);
                      }
                    } catch (g) {
                      d.e(g);
                    } finally {
                      d.f();
                    }
                    return i.a.createElement(
                      'g',
                      null,
                      n.map(function (e) {
                        return a._renderQuadrant(u, e, r, l, c, s);
                      }),
                    );
                  },
                },
              ],
              [
                {
                  key: '_renderQuadrant',
                  value: function (e, t, n, r, o, l) {
                    return i.a.createElement(
                      'foreignObject',
                      {
                        key: t.id,
                        x: t.legendX,
                        y: t.legendY,
                        width: t.legendWidth,
                        height: t.legendHeight,
                      },
                      i.a.createElement(
                        'div',
                        { className: l.quadrant },
                        i.a.createElement(
                          'h2',
                          { className: l.quadrantHeading },
                          t.name,
                        ),
                        i.a.createElement(
                          'div',
                          { className: l.rings },
                          n.map(function (n) {
                            return a._renderRing(
                              n,
                              a._getSegment(e, t, n),
                              r,
                              o,
                              l,
                            );
                          }),
                        ),
                      ),
                    );
                  },
                },
                {
                  key: '_renderRing',
                  value: function (e, t, a, n, r) {
                    return i.a.createElement(
                      'div',
                      { key: e.id, className: r.ring },
                      i.a.createElement(
                        'h3',
                        { className: r.ringHeading },
                        e.name,
                      ),
                      0 === t.length
                        ? i.a.createElement('p', null, '(empty)')
                        : i.a.createElement(
                            'ol',
                            { className: r.ringList },
                            t.map(function (e) {
                              var t = i.a.createElement(
                                'span',
                                { className: r.entry },
                                e.title,
                              );
                              return (
                                e.url &&
                                  (t = i.a.createElement(
                                    'a',
                                    { className: r.entryLink, href: e.url },
                                    t,
                                  )),
                                i.a.createElement(
                                  'li',
                                  {
                                    key: e.id,
                                    value: e.idx + 1,
                                    onMouseEnter:
                                      a &&
                                      function () {
                                        return a(e);
                                      },
                                    onMouseLeave:
                                      a &&
                                      function () {
                                        return n(e);
                                      },
                                  },
                                  t,
                                )
                              );
                            }),
                          ),
                    );
                  },
                },
                {
                  key: '_getSegment',
                  value: function (e, t, a) {
                    var n =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : 0;
                    return (e[t.idx] || {})[a.idx + n] || [];
                  },
                },
              ],
            ),
            a
          );
        })(i.a.PureComponent);
      Wr.propTypes = {
        quadrants: pe.a.arrayOf(pe.a.shape(Rr)).isRequired,
        rings: pe.a.arrayOf(pe.a.shape(Fr)).isRequired,
        entries: pe.a.arrayOf(pe.a.shape(Tr)).isRequired,
        onEntryMouseEnter: pe.a.func,
        onEntryMouseLeave: pe.a.func,
        classes: pe.a.object.isRequired,
      };
      var Pr = Object(U.a)({
          quadrant: {
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
          },
          quadrantHeading: {
            pointerEvents: 'none',
            userSelect: 'none',
            marginTop: 0,
            marginBottom: 'calc(18px * 0.375)',
            fontSize: '18px',
          },
          rings: { columns: 3 },
          ring: {
            breakInside: 'avoid-column',
            pageBreakInside: 'avoid',
            '-webkit-column-break-inside': 'avoid',
            fontSize: '12px',
          },
          ringHeading: {
            pointerEvents: 'none',
            userSelect: 'none',
            marginTop: 0,
            marginBottom: 'calc(12px * 0.375)',
            fontSize: '12px',
            fontWeight: 800,
          },
          ringList: {
            listStylePosition: 'inside',
            marginTop: 0,
            paddingLeft: 0,
            fontVariantNumeric: 'proportional-nums',
            '-moz-font-feature-settings': 'pnum',
            '-webkit-font-feature-settings': 'pnum',
            'font-feature-settings': 'pnum',
          },
          entry: {
            pointerEvents: 'none',
            userSelect: 'none',
            fontSize: '11px',
          },
          entryLink: { pointerEvents: 'none' },
        })(Wr),
        Hr = (function (e) {
          Object(R.a)(a, e);
          var t = Object(F.a)(a);
          function a() {
            return Object(B.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(L.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.width,
                    a = e.height,
                    n = e.radius,
                    r = e.quadrants,
                    o = e.rings,
                    l = e.entries,
                    c = e.activeEntry,
                    s = e.onEntryMouseEnter,
                    u = e.onEntryMouseLeave;
                  return i.a.createElement(
                    'g',
                    null,
                    i.a.createElement(Pr, {
                      quadrants: r,
                      rings: o,
                      entries: l,
                      onEntryMouseEnter:
                        s &&
                        function (e) {
                          return s(e);
                        },
                      onEntryMouseLeave:
                        u &&
                        function (e) {
                          return u(e);
                        },
                    }),
                    i.a.createElement(
                      'g',
                      {
                        transform: 'translate('
                          .concat(t / 2, ', ')
                          .concat(a / 2, ')'),
                      },
                      i.a.createElement(Lr, { radius: n, rings: o }),
                      i.a.createElement(Dr, { x: -0.5 * t, y: 0.5 * a }),
                      l.map(function (e) {
                        return i.a.createElement(Nr, {
                          key: e.id,
                          x: e.x,
                          y: e.y,
                          color: e.color,
                          title: e.title,
                          number: e.idx + 1,
                          url: e.url,
                          moved: e.moved,
                          active: c && c.id === e.id,
                          onMouseEnter:
                            s &&
                            function () {
                              return s(e);
                            },
                          onMouseLeave:
                            u &&
                            function () {
                              return u(e);
                            },
                        });
                      }),
                      i.a.createElement(Ir, {
                        visible: !!c,
                        text: c ? c.title : '',
                        x: c ? c.x : 0,
                        y: c ? c.y : 0,
                      }),
                    ),
                  );
                },
              },
            ]),
            a
          );
        })(i.a.PureComponent);
      Hr.propTypes = {
        width: pe.a.number.isRequired,
        height: pe.a.number.isRequired,
        radius: pe.a.number.isRequired,
        rings: pe.a.arrayOf(pe.a.shape(Fr)).isRequired,
        quadrants: pe.a.arrayOf(pe.a.shape(Rr)).isRequired,
        entries: pe.a.arrayOf(pe.a.shape(Tr)).isRequired,
        activeEntry: pe.a.object,
        onEntryMouseEnter: pe.a.func,
        onEntryMouseLeave: pe.a.func,
      };
      var zr = (function () {
        function e(t, a, n, r) {
          Object(B.a)(this, e),
            (this.nextSeed = r),
            (this.polarMin = { t: t.radialMin, r: a.innerRadius }),
            (this.polarMax = { t: t.radialMax, r: a.outerRadius }),
            (this.cartesianMin = { x: 15 * t.offsetX, y: 15 * t.offsetY }),
            (this.cartesianMax = { x: n * t.offsetX, y: n * t.offsetY });
        }
        return (
          Object(L.a)(e, [
            {
              key: 'clipx',
              value: function (e) {
                var t = Zr(
                  Ur(Yr(e, this.cartesianMin, this.cartesianMax)),
                  this.polarMin.r + 15,
                  this.polarMax.r - 15,
                );
                return (e.x = _r(t).x), e.x;
              },
            },
            {
              key: 'clipy',
              value: function (e) {
                var t = Zr(
                  Ur(Yr(e, this.cartesianMin, this.cartesianMax)),
                  this.polarMin.r + 15,
                  this.polarMax.r - 15,
                );
                return (e.y = _r(t).y), e.y;
              },
            },
            {
              key: 'random',
              value: function () {
                return _r({
                  t: this._randomBetween(this.polarMin.t, this.polarMax.t),
                  r: this._normalBetween(this.polarMin.r, this.polarMax.r),
                });
              },
            },
            {
              key: '_random',
              value: function () {
                var e = 1e4 * Math.sin(this.nextSeed());
                return e - Math.floor(e);
              },
            },
            {
              key: '_randomBetween',
              value: function (e, t) {
                return e + this._random() * (t - e);
              },
            },
            {
              key: '_normalBetween',
              value: function (e, t) {
                return e + 0.5 * (this._random() + this._random()) * (t - e);
              },
            },
          ]),
          e
        );
      })();
      function Ur(e) {
        var t = e.x,
          a = e.y;
        return { t: Math.atan2(a, t), r: Math.sqrt(t * t + a * a) };
      }
      function _r(e) {
        var t = e.r,
          a = e.t;
        return { x: t * Math.cos(a), y: t * Math.sin(a) };
      }
      function Gr(e, t, a) {
        var n = Math.min(t, a),
          r = Math.max(t, a);
        return Math.min(Math.max(e, n), r);
      }
      function Zr(e, t, a) {
        return { t: e.t, r: Gr(e.r, t, a) };
      }
      function Yr(e, t, a) {
        return { x: Gr(e.x, t.x, a.x), y: Gr(e.y, t.y, a.y) };
      }
      var Vr = (function (e) {
        Object(R.a)(a, e);
        var t = Object(F.a)(a);
        function a(e) {
          var n;
          return (
            Object(B.a)(this, a),
            ((n = t.call(this, e)).state = { activeEntry: null }),
            n
          );
        }
        return (
          Object(L.a)(a, null, [
            {
              key: 'adjustQuadrants',
              value: function (e, t, a, n) {
                var r = [16, a / 2 - t - 16, a / 2 + t + 16, a - 16],
                  i = [16, n / 2 - 16, n / 2, n - 16],
                  o = [
                    {
                      x: r[2],
                      y: i[2],
                      width: r[3] - r[2],
                      height: i[3] - i[2],
                    },
                    {
                      x: r[0],
                      y: i[2],
                      width: r[1] - r[0],
                      height: i[3] - i[2],
                    },
                    {
                      x: r[0],
                      y: i[0],
                      width: r[1] - r[0],
                      height: i[1] - i[0],
                    },
                    {
                      x: r[2],
                      y: i[0],
                      width: r[3] - r[2],
                      height: i[1] - i[0],
                    },
                  ];
                e.forEach(function (e, t) {
                  var a = o[t % 4];
                  (e.idx = t),
                    (e.radialMin = (t * Math.PI) / 2),
                    (e.radialMax = ((t + 1) * Math.PI) / 2),
                    (e.offsetX = t % 4 === 0 || t % 4 === 3 ? 1 : -1),
                    (e.offsetY = t % 4 === 0 || t % 4 === 1 ? 1 : -1),
                    (e.legendX = a.x),
                    (e.legendY = a.y),
                    (e.legendWidth = a.width),
                    (e.legendHeight = a.height);
                });
              },
            },
            {
              key: 'adjustRings',
              value: function (e, t) {
                e.forEach(function (a, n) {
                  (a.idx = n),
                    (a.outerRadius = ((n + 2) / (e.length + 1)) * t),
                    (a.innerRadius =
                      ((0 === n ? 0 : n + 1) / (e.length + 1)) * t);
                });
              },
            },
            {
              key: 'adjustEntries',
              value: function (e, t, a, n, r) {
                var i = 42;
                e.forEach(function (e, o) {
                  var l = a.find(function (t) {
                      var a =
                        'object' === typeof e.quadrant
                          ? e.quadrant.id
                          : e.quadrant;
                      return t.id === a;
                    }),
                    c = n.find(function (t) {
                      var a = 'object' === typeof e.ring ? e.ring.id : e.ring;
                      return t.id === a;
                    });
                  if (!l)
                    throw new Error(
                      'Unknown quadrant '
                        .concat(e.quadrant, ' for entry ')
                        .concat(e.id, '!'),
                    );
                  if (!c)
                    throw new Error(
                      'Unknown ring '
                        .concat(e.ring, ' for entry ')
                        .concat(e.id, '!'),
                    );
                  (e.idx = o),
                    (e.quadrant = l),
                    (e.ring = c),
                    (e.segment = new zr(l, c, r, function () {
                      return i++;
                    }));
                  var s = e.segment.random();
                  (e.x = s.x),
                    (e.y = s.y),
                    (e.active = !!t && e.id === t.id),
                    (e.color = e.active
                      ? e.ring.color
                      : Sr()(e.ring.color)
                          .desaturate(0.5)
                          .lighten(0.1)
                          .string());
                });
                for (
                  var o = Object(Cr.b)()
                      .nodes(e)
                      .velocityDecay(0.19)
                      .force(
                        'collision',
                        Object(Cr.a)().radius(12).strength(0.85),
                      )
                      .stop(),
                    l = 0,
                    c = Math.ceil(
                      Math.log(o.alphaMin()) / Math.log(1 - o.alphaDecay()),
                    );
                  l < c;
                  ++l
                ) {
                  o.tick();
                  var s,
                    u = Object(S.a)(e);
                  try {
                    for (u.s(); !(s = u.n()).done; ) {
                      var d = s.value;
                      (d.x = d.segment.clipx(d)), (d.y = d.segment.clipy(d));
                    }
                  } catch (m) {
                    u.e(m);
                  } finally {
                    u.f();
                  }
                }
              },
            },
          ]),
          Object(L.a)(a, [
            {
              key: '_setActiveEntry',
              value: function (e) {
                this.setState({ activeEntry: e });
              },
            },
            {
              key: '_clearActiveEntry',
              value: function () {
                this.setState({ activeEntry: null });
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.width,
                  r = t.height,
                  o = t.quadrants,
                  l = t.rings,
                  c = t.entries,
                  s = this.state.activeEntry,
                  u = Math.min(n, r) / 2;
                return (
                  a.adjustQuadrants(o, u, n, r),
                  a.adjustRings(l, u),
                  a.adjustEntries(c, s, o, l, u),
                  i.a.createElement(
                    'svg',
                    Object.assign(
                      {
                        ref: function (t) {
                          e.node = t;
                        },
                        width: n,
                        height: r,
                      },
                      this.props.svgProps,
                    ),
                    i.a.createElement(Hr, {
                      width: n,
                      height: r,
                      radius: u,
                      entries: c,
                      quadrants: o,
                      rings: l,
                      activeEntry: s,
                      onEntryMouseEnter: function (t) {
                        return e._setActiveEntry(t);
                      },
                      onEntryMouseLeave: function () {
                        return e._clearActiveEntry();
                      },
                    }),
                  )
                );
              },
            },
          ]),
          a
        );
      })(i.a.Component);
      Vr.propTypes = {
        width: pe.a.number.isRequired,
        height: pe.a.number.isRequired,
        quadrants: pe.a.arrayOf(pe.a.object).isRequired,
        rings: pe.a.arrayOf(pe.a.object).isRequired,
        entries: pe.a.arrayOf(pe.a.object).isRequired,
        svgProps: pe.a.object,
      };
      var Jr = new Ie({
          id: 'plugin.techradar',
          description: 'Used by the Tech Radar to render the diagram',
        }),
        Qr = function () {
          var e = Ye($e),
            t = Ye(Jr),
            a = (function (e) {
              var t = Object(r.useState)({
                  loading: !0,
                  error: void 0,
                  data: void 0,
                }),
                a = Object(c.a)(t, 2),
                n = a[0],
                i = a[1];
              return (
                Object(r.useEffect)(function () {
                  e.load()
                    .then(function (e) {
                      i({ loading: !1, error: void 0, data: e });
                    })
                    .catch(function (e) {
                      i({ loading: !1, error: e, data: void 0 });
                    });
                }, []),
                n
              );
            })(t),
            n = a.loading,
            o = a.error,
            l = a.data;
          return (
            Object(r.useEffect)(
              function () {
                o && e.post(o);
              },
              [o && o.message],
            ),
            i.a.createElement(
              it,
              { theme: at.home },
              i.a.createElement(mt, {
                title: t.additionalOpts.title,
                subtitle: t.additionalOpts.subtitle,
              }),
              i.a.createElement(
                pt,
                null,
                i.a.createElement(
                  M.a,
                  { container: !0, spacing: 3, direction: 'row' },
                  i.a.createElement(
                    M.a,
                    { item: !0, xs: 12, sm: 6, md: 4 },
                    n && i.a.createElement(ua, null),
                    !n &&
                      !o &&
                      i.a.createElement(Vr, {
                        width: t.width,
                        height: t.height,
                        svgProps: t.additionalOpts.svgProps,
                        rings: l.rings,
                        quadrants: l.quadrants,
                        entries: l.entries,
                      }),
                  ),
                ),
              ),
            )
          );
        },
        Xr = It({
          id: 'tech-radar',
          register: function (e) {
            e.router.registerRoute('/tech-radar', Qr);
          },
        }),
        $r = new Array();
      $r.push({ id: 'use', name: 'USE', color: '#93c47d' }),
        $r.push({ id: 'trial', name: 'TRIAL', color: '#93d2c2' }),
        $r.push({ id: 'assess', name: 'ASSESS', color: '#fbdb84' }),
        $r.push({ id: 'hold', name: 'HOLD', color: '#efafa9' });
      var Kr = new Array();
      Kr.push({ id: 'infrastructure', name: 'Infrastructure' }),
        Kr.push({ id: 'frameworks', name: 'Frameworks' }),
        Kr.push({ id: 'languages', name: 'Languages' }),
        Kr.push({ id: 'process', name: 'Process' });
      var ei = new Array();
      ei.push({
        moved: 0,
        ring: 'use',
        url: '#',
        key: 'javascript',
        id: 'javascript',
        title: 'JavaScript',
        quadrant: 'languages',
      }),
        ei.push({
          moved: 0,
          ring: 'use',
          url: '#',
          key: 'typescript',
          id: 'typescript',
          title: 'TypeScript',
          quadrant: 'languages',
        }),
        ei.push({
          moved: 0,
          ring: 'use',
          url: '#',
          key: 'webpack',
          id: 'webpack',
          title: 'Webpack',
          quadrant: 'frameworks',
        }),
        ei.push({
          moved: 0,
          ring: 'use',
          url: '#',
          key: 'react',
          id: 'react',
          title: 'React',
          quadrant: 'frameworks',
        }),
        ei.push({
          moved: 0,
          ring: 'use',
          url: '#',
          key: 'code-reviews',
          id: 'code-reviews',
          title: 'Code Reviews',
          quadrant: 'process',
        }),
        ei.push({
          moved: 0,
          url: '#',
          key: 'mob-programming',
          id: 'mob-programming',
          title: 'Mob Programming',
          quadrant: 'process',
          ring: 'assess',
        }),
        ei.push({
          moved: 0,
          ring: 'use',
          url: '#',
          key: 'github-actions',
          id: 'github-actions',
          title: 'GitHub Actions',
          quadrant: 'infrastructure',
        });
      var ti = a(399),
        ai = a(416),
        ni = Object(N.a)(function (e) {
          return {
            card: { display: 'flex', flexDirection: 'column' },
            cardActions: { flexGrow: 1, alignItems: 'flex-end' },
            media: { height: 128 },
            mediaContain: { backgroundSize: 'contain' },
            lifecycle: { lineHeight: '0.8em', color: 'white' },
            ga: { backgroundColor: e.palette.status.ok },
            alpha: { backgroundColor: e.palette.status.error },
            beta: { backgroundColor: e.palette.status.warning },
            domains: { position: 'relative', top: e.spacing(2) },
            spaceBetween: { justifyContent: 'space-between' },
          };
        }),
        ri = function (e) {
          var t = e.card,
            a = e.objectFit,
            n = ni(),
            r = t.title,
            o = t.description,
            l = t.url,
            c = t.image,
            s = t.lifecycle,
            u = t.newsTag,
            d = t.tags;
          return i.a.createElement(
            Z.a,
            { key: r, className: n.card },
            i.a.createElement(ti.a, {
              image: c,
              title: r,
              className: ve()(
                n.media,
                Object(h.a)({}, n.mediaContain, 'contain' === a),
              ),
            }),
            i.a.createElement(
              Y.a,
              null,
              i.a.createElement(
                I.a,
                { gutterBottom: !0, variant: 'h5' },
                r,
                ' ',
                s &&
                  'ga' !== s.toLowerCase() &&
                  i.a.createElement(ai.a, {
                    label: s,
                    className: ve()(n.lifecycle, n[s.toLowerCase()]),
                  }),
              ),
              i.a.createElement(
                I.a,
                { paragraph: !0 },
                o || 'Description missing',
              ),
              d &&
                i.a.createElement(
                  'div',
                  { className: n.domains },
                  d.map(function (e, t) {
                    return i.a.createElement(ai.a, { key: t, label: e });
                  }),
                ),
            ),
            i.a.createElement(
              G.a,
              {
                className: ve()(
                  n.cardActions,
                  Object(h.a)({}, n.spaceBetween, u),
                ),
              },
              i.a.createElement(
                Q.a,
                { size: 'small', color: 'primary', href: l, disabled: !l },
                'Explore',
              ),
            ),
          );
        },
        ii = Object(N.a)(function (e) {
          return {
            container: {
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, 296px)',
              gridGap: e.spacing(3),
              marginBottom: e.spacing(6),
            },
          };
        }),
        oi = [
          {
            title: 'Lighthouse',
            description:
              "Google's Lighthouse tool is a great resource for benchmarking and improving the accessibility, performance, SEO, and best practices of your website.",
            url: '/lighthouse',
            image:
              'https://raw.githubusercontent.com/GoogleChrome/lighthouse/8b3d7f052b2e64dd857e741d7395647f487697e7/assets/lighthouse-logo.png',
            tags: ['web', 'seo', 'accessibility', 'performance'],
          },
          {
            title: 'Tech Radar',
            description:
              'Tech Radar is a list of technologies, complemented by an assessment result, called ring assignment.',
            url: '/tech-radar',
            image:
              'https://storage.googleapis.com/wf-blogs-engineering-media/2018/09/fe13bb32-wf-tech-radar-hero-1024x597.png',
            tags: ['standards', 'landscape'],
          },
          {
            title: 'GraphiQL',
            description:
              'Integrates GraphiQL as a tool to browse GraphiQL endpoints inside Backstage.',
            url: 'graphiql',
            image:
              'https://camo.githubusercontent.com/517398c3fbe0687d3d4dcbe05da82970b882e75a/68747470733a2f2f64337676366c703535716a6171632e636c6f756466726f6e742e6e65742f6974656d732f33413061324e314c3346324f304c3377326e316a2f477261706869514c382e706e673f582d436c6f75644170702d56697369746f722d49643d3433363432',
            tags: ['graphql', 'dev'],
          },
        ],
        li = function () {
          var e = ii();
          return i.a.createElement(
            it,
            { theme: at.home },
            i.a.createElement(mt, {
              title: 'Explore',
              subtitle: 'Tools and services available in Backstage',
            }),
            i.a.createElement(
              pt,
              null,
              i.a.createElement(
                bt,
                { title: 'Tools' },
                i.a.createElement(
                  fa,
                  null,
                  i.a.createElement(
                    I.a,
                    null,
                    'Explore tools available in Backstage',
                  ),
                ),
              ),
              i.a.createElement(
                'div',
                { className: e.container },
                oi.map(function (e, t) {
                  return i.a.createElement(ri, { card: e, key: t });
                }),
              ),
            ),
          );
        },
        ci = It({
          id: 'explore',
          register: function (e) {
            e.router.registerRoute('/explore', li);
          },
        }),
        si = a(173),
        ui = a(174),
        di = a(179),
        mi = a(32),
        hi = a(65),
        pi = a(45),
        fi = a(73),
        gi = a(182);
      function bi() {
        var e = Object(si.a)([
          '\n      {\n        es_check {\n          ok\n        }\n      }\n    ',
        ]);
        return (
          (bi = function () {
            return e;
          }),
          e
        );
      }
      var Ei = new hi.a(),
        vi = new fi.a({
          uri: 'http://cdo-api.dev.msc.rokulabs.net/',
          fetch: fetch,
        }),
        yi = new pi.a({
          cache: Ei,
          link: vi,
          name: 'react-web-client',
          version: '1.3',
          queryDeduplication: !1,
          defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
        }),
        ki = Object(N.a)({
          table: { minWidth: 650 },
          avatar: { height: 32, width: 32, borderRadius: '50%' },
        }),
        Oi = function (e) {
          var t = e.users,
            a = ki();
          return i.a.createElement(
            mn.a,
            null,
            i.a.createElement(
              le.a,
              {
                className: a.table,
                size: 'small',
                'aria-label': 'a dense table',
              },
              i.a.createElement(
                re.a,
                null,
                i.a.createElement(
                  ie.a,
                  null,
                  i.a.createElement(oe.a, null, 'Avatar'),
                  i.a.createElement(oe.a, null, 'Name'),
                  i.a.createElement(oe.a, null, 'Email'),
                  i.a.createElement(oe.a, null, 'Nationality'),
                ),
              ),
              i.a.createElement(
                ce.a,
                null,
                t.map(function (e) {
                  return i.a.createElement(
                    ie.a,
                    { key: e.email },
                    i.a.createElement(
                      oe.a,
                      null,
                      i.a.createElement('img', {
                        src: e.picture.medium,
                        className: a.avatar,
                        alt: e.name.first,
                      }),
                    ),
                    i.a.createElement(
                      oe.a,
                      null,
                      e.name.first,
                      ' ',
                      e.name.last,
                    ),
                    i.a.createElement(oe.a, null, e.email),
                    i.a.createElement(oe.a, null, e.nat),
                  );
                }),
              ),
            ),
          );
        },
        wi = function () {
          var e = Object(di.a)(Object(gi.a)(bi())),
            t = e.data,
            a = e.loading,
            n = e.error,
            r = (Object(ui.get)(t, 'data.es_check.ok', !1), []);
          return a
            ? i.a.createElement(ua, null)
            : n
            ? i.a.createElement(un.a, { severity: 'error' }, n.message)
            : i.a.createElement(Oi, { users: r || [] });
        },
        xi = function () {
          return i.a.createElement(
            mi.a,
            { client: yi },
            i.a.createElement(wi, null),
          );
        },
        Ci = function () {
          return i.a.createElement(
            it,
            { theme: at.tool },
            i.a.createElement(
              mt,
              { title: 'Welcome to services!', subtitle: 'Optional subtitle' },
              i.a.createElement(Pt, { label: 'Owner', value: 'Team X' }),
              i.a.createElement(Pt, { label: 'Lifecycle', value: 'Alpha' }),
            ),
            i.a.createElement(
              pt,
              null,
              i.a.createElement(
                bt,
                { title: 'Services' },
                i.a.createElement(
                  fa,
                  null,
                  'A description of your plugin goes here.',
                ),
              ),
              i.a.createElement(
                M.a,
                { container: !0, spacing: 3, direction: 'column' },
                i.a.createElement(
                  M.a,
                  { item: !0 },
                  i.a.createElement(
                    jt,
                    { title: 'Information card' },
                    i.a.createElement(
                      I.a,
                      { variant: 'body1' },
                      'All content should be wrapped in a card like this.',
                    ),
                  ),
                ),
                i.a.createElement(
                  M.a,
                  { item: !0 },
                  i.a.createElement(
                    jt,
                    {
                      title:
                        'Example User List (fetching data from randomuser.me)',
                    },
                    i.a.createElement(xi, null),
                  ),
                ),
              ),
            ),
          );
        },
        ji = It({
          id: 'services',
          register: function (e) {
            e.router.registerRoute('/services', Ci);
          },
        }),
        Si = Je.builder(),
        Fi = new Ke();
      Si.add(Xe, Fi);
      var Ri = new et(Fi);
      Si.add($e, Ri),
        Si.add(We, new Nt()),
        Si.add(Vn, new Jn('http://localhost:3003')),
        Si.add(
          Jr,
          new (function e(t, a, n) {
            var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
            Object(B.a)(this, e),
              (this.width = t),
              (this.height = a),
              (this.load = n),
              (this.additionalOpts = r),
              (this.defaultAdditionalOpts = {
                title: 'Tech Radar',
                subtitle: 'Welcome to the Tech Radar!',
              }),
              (this.additionalOpts = Object(m.a)(
                {},
                this.defaultAdditionalOpts,
                {},
                r,
              ));
          })(1800, 800, function () {
            return Promise.resolve({ rings: $r, quadrants: Kr, entries: ei });
          }),
        );
      var Ti = Si.build(),
        Bi = new Rt();
      Bi.registerApis(Ti),
        Bi.registerPlugin.apply(Bi, Object(s.a)(Object.values(n)));
      var Li = Bi.build(),
        Ai = function () {
          var e = (function (e) {
              var t = Object(r.useState)(e),
                a = Object(c.a)(t, 2),
                n = a[0],
                i = a[1];
              return (
                Object(r.useEffect)(function () {
                  if (!window.matchMedia) return function () {};
                  var e = window.matchMedia('(prefers-color-scheme: dark)'),
                    t = function (e) {
                      'auto' === localStorage.getItem('theme') &&
                        (e.matches ? i('dark') : i('light'), i('auto'));
                    };
                  return (
                    e.addListener(t),
                    function () {
                      e.removeListener(t);
                    }
                  );
                }),
                [
                  n,
                  function () {
                    if ('light' === n)
                      i('dark'), localStorage.setItem('theme', 'dark');
                    else if ('dark' === n) {
                      if (!window.matchMedia)
                        return (
                          i('light'),
                          localStorage.setItem('theme', 'light'),
                          void i('light')
                        );
                      i('auto'),
                        localStorage.setItem('theme', 'auto'),
                        i('auto');
                    } else i('light'), localStorage.setItem('theme', 'light');
                  },
                ]
              );
            })(localStorage.getItem('theme') || 'auto'),
            t = Object(c.a)(e, 2),
            a = t[0],
            n = t[1],
            o = k;
          switch (a) {
            case 'light':
              o = k;
              break;
            case 'dark':
              o = O;
              break;
            default:
              if (!window.matchMedia) {
                o = O;
                break;
              }
              o = O;
          }
          var l = { theme: a, toggleTheme: n };
          return i.a.createElement(
            Ja.Provider,
            { value: l },
            i.a.createElement(
              u.a,
              { theme: o },
              i.a.createElement(
                d.a,
                null,
                i.a.createElement(dn, { forwarder: Fi }),
                i.a.createElement(
                  Da.a,
                  null,
                  i.a.createElement(on, null, i.a.createElement(Li, null)),
                ),
              ),
            ),
          );
        };
      l.a.render(i.a.createElement(Ai, null), document.getElementById('root'));
    },
  },
  [[193, 1, 2]],
]);
//# sourceMappingURL=main.3743bebe.chunk.js.map

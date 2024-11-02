import { useEffect, useState } from 'react';

import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

import { useTheme } from '~/hooks/useTheme';
import { useTypingEffect } from '~/hooks/useTypingEffect';

import styles from './MadeBy.module.css';

export const MadeBy = () => {
  const { isReducedMotion } = useTheme();

  const [handWritingFinished, setHandwritingFinished] =
    useState(false);
  const [haltTypingEffect, setHaltTypingEffect] = useState(false);

  const [ref, inView] = useInView({ threshold: 0 });

  const name = useTypingEffect({
    halt: haltTypingEffect,
    startDelayMs: 500,
    targetText: handWritingFinished ? 'TANOYBASAK' : '',
  });

  useEffect(() => {
    if (isReducedMotion) setHandwritingFinished(true);
  }, [isReducedMotion, inView]);

  useEffect(() => {
    if (!inView) setHandwritingFinished(false);
  }, [inView]);

  useEffect(() => {
    setHaltTypingEffect(!handWritingFinished && name === '');
  }, [handWritingFinished, name]);

  return (
    <div className={styles.container}>
      <svg
        aria-label="Made with love by: Renato Böhler"
        className={classNames(styles.handwriting, {
          [styles.visible]: inView,
        })}
        height="75"
        ref={ref}
        viewBox="103 470 403 125"
      >
        {/* Made */}
        <path
          className={styles.madeM}
          d="M110.462+529.456C108.185+531.734+107.134+531.176+108.817+527.811C110.975+523.494+114.328+519.833+117.044+515.882C117.554+515.14+128.797+500.957+129.384+502.719C131.5+509.065+114.151+540.563+117.455+540.563C117.648+540.563+136.513+506.692+137.2+508.066C140.596+514.859+124.567+528.459+128.562+536.449C129.127+537.58+130.74+535.033+131.441+533.981C135.797+527.447+139.585+520.47+143.781+513.825C145.59+510.962+149.129+501.8+149.129+505.187C149.129+512.526+129.904+542.273+147.895+530.279"
        />
        <path
          className={styles.madeA}
          d="M169.285+512.591C164.126+502.274+145.583+527.556+150.774+532.747C153.826+535.799+164.095+519.534+165.583+517.116C166.939+514.913+170.324+508.024+169.696+510.534C168.149+516.723+160.036+527.201+165.583+532.747"
        />
        <path
          className={styles.madeDe}
          d="M186.15+519.173C189.393+515.93+187.34+506.854+181.626+509.712C178.657+511.196+163.695+529.704+170.93+531.513C181.647+534.192+190.878+505.31+193.143+499.017C194.328+495.727+195.74+492.461+196.845+489.144C197.152+488.224+197.942+485.579+197.257+486.265C190.488+493.034+182.608+515.456+185.328+524.52C189.054+536.941+209.543+502.719+205.895+502.719C191.238+502.719+192.762+556.575+219.47+529.868"
        />

        {/* With */}
        <path
          className={styles.with}
          d="M248.762+511.437C248.762+509.838+247.009+514.12+246.294+515.55C244.739+518.66+238.804+534.51+242.592+537.352C247.521+541.048+257.083+519.109+258.223+516.373C258.825+514.93+260.156+510.45+259.457+511.848C257.504+515.755+249.367+534.515+253.698+537.763C258.117+541.077+265.236+521.258+266.039+519.252C267.022+516.793+268.918+509.2+268.918+511.848C268.918+515.633+257.734+533.289+264.805+536.117C272.667+539.262+276.936+524.197+279.202+519.664C279.613+518.841+280.436+516.276+280.436+517.195C280.436+520.828+272.199+537.76+277.968+539.408C285.18+541.469+302.216+509.828+305.528+504.032C306.203+502.852+313.19+485.933+312.11+485.933C311.113+485.933+311.223+486.768+310.876+487.578C307.247+496.046+290.848+529.522+295.245+536.117C296.167+537.501+300.276+533.143+300.592+532.827C309.367+524.051+313.964+512.164+319.103+501.153C320.354+498.472+321.708+495.667+322.805+492.926C323.484+491.227+325.333+486.285+324.039+487.578C318.7+492.917+303.397+533.537+305.94+537.352C308.93+541.837+317.817+522.286+318.28+520.898C318.474+520.316+319.103+518.639+319.103+519.252C319.103+524.52+313.61+538.713+325.273+534.472C330.409+532.605+332.345+528.392+334.323+523.777"
        />
        <path
          className={styles.withIDot}
          d="M283.316+506.089C280.418+516.658+280.426+499.086+285.372+504.032C286.672+505.332+283.522+514.008+281.67+513.082C280.187+512.34+284.688+501.082+283.316+506.089Z"
        />
        <path
          className={styles.withTCross}
          d="M294.422+499.096C294.422+499.096+297.685+498.141+299.358+497.862C306.698+496.639+314.541+494.571+321.982+494.571"
        />

        {/* ❤ */}
        <path
          className={styles.heart}
          d="M376.233+505.937C387.445+497.528+373.673+472.591+359.42+479.717C339.481+489.686+371.904+539.764+372.23+539.764C388.387+539.764+416.046+496.371+403.855+480.117C390.025+461.678+373.646+507.878+376.233+505.937Z"
        />

        {/* By */}
        <path
          className={styles.by}
          d="M437.107+500.591C437.107+500.591+436.708+502.145+436.353+502.858C432.743+510.104+429.611+517.643+426.563+525.151C426.283+525.838+423.714+532.681+423.174+533.842C422.673+534.919+421.291+538.054+421.291+536.865C421.291+519.214+449.399+512.601+445.391+532.708C443.629+541.546+425.618+540.265+419.408+537.999C418.509+537.671+416.772+537.824+416.772+536.865C416.772+535.259+423.402+538.201+423.927+538.376C429.955+540.393+435.917+540.485+441.625+537.621C447.505+534.671+452.459+527.835+456.688+522.884C456.949+522.579+463.24+513.06+462.336+513.06C456.943+513.06+454.671+536.694+458.571+537.999C464.638+540.028+472.073+525.146+474.387+521.373C475.773+519.112+477.126+516.824+478.528+514.571C479.048+513.737+480.722+511.371+480.411+512.304C473.095+534.33+465.605+557.168+451.793+576.162C445.916+584.244+431.502+598.333+422.797+585.231C401.066+552.522+456.425+545.617+474.763+546.312C477.417+546.412+507.273+545.178+502.629+545.178"
          onTransitionEnd={() => setHandwritingFinished(true)}
        />
      </svg>
      <span
        aria-hidden
        className={styles.name}
        data-caret={handWritingFinished}
      >
        {name}
      </span>
    </div>
  );
};

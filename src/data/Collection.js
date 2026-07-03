import img1 from '../assets/Collection-1.jpg'
import img2 from '../assets/Collection-2.jpg'
import img3 from '../assets/Collection-3.jpg'
import img4 from '../assets/Collection-4.jpg'
import img5 from '../assets/Collection-5.jpg'
import img6 from '../assets/Collection-6.jpg'

export const collections = [
  {
    id: 1,
    name: '红军长征时期军用地图',
    image: img1,
    year: '1935年',
    description: '此地图为红军长征途中使用，标注了四度赤水时的地形及行军路线，见证了红军四渡赤水的艰难历程。',
    historicalValue: '国家一级文物，是研究红军长征路线及军事战略的重要实物资料，具有极高的历史研究价值。'
  },
  {
    id: 2,
    name: '八路军抗战时期军号',
    image: img2,
    year: '1940年',
    description: '八路军司号员使用过的铜制军号，号身刻有"八路军"字样，曾在百团大战中吹响冲锋号角。',
    historicalValue: '国家二级文物，见证了八路军抗击日军的英勇事迹，是研究抗战时期军队通信与战斗精神的重要物证。'
  },
  {
    id: 3,
    name: '解放区土地改革文件手稿',
    image: img3,
    year: '1947年',
    description: '解放区土改工作队成员手写记录的文件，详细记载了土地分配方案及贫农分田情况，共12页。',
    historicalValue: '国家二级文物，真实反映了中国共产党领导土地改革的政策实施过程，具有重要的政治与历史研究意义。'
  },
  {
    id: 4,
    name: '抗美援朝志愿军立功证书',
    image: img4,
    year: '1952年',
    description: '中国人民志愿军某部战士荣获的三等功证书，证书上盖有部队印章及首长签名，保存完好。',
    historicalValue: '国家三级文物，是抗美援朝战争中志愿军英勇作战的见证，对于研究战争史及英雄人物具有珍贵价值。'
  },
  {
    id: 5,
    name: '延安时期纺车',
    image: img5,
    year: '1943年',
    description: '延安大生产运动时期军民使用的木制纺车，外观古朴，把手处因长期使用已被磨得光滑。',
    historicalValue: '国家三级文物，体现了延安时期"自己动手，丰衣足食"的艰苦奋斗精神，是革命传统教育的生动教材。'
  },
  {
    id: 6,
    name: '开国大典原始报纸',
    image: img6,
    year: '1949年10月2日',
    description: '1949年10月2日《人民日报》原件，头版头条刊载了开国大典盛况及毛主席讲话全文。',
    historicalValue: '国家一级文物，是新中国成立这一伟大历史时刻的直接记录，具有无可替代的文献价值和纪念意义。'
  }
]

// 暴露初始化方法
export function initCollectionData(){
    if(!localStorage.getItem('collections')){
        localStorage.setItem('collections',JSON.stringify(collections))
    }
}
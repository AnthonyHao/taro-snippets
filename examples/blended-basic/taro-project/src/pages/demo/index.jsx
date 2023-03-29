import Taro from '@tarojs/taro'
import { View, Progress, Image } from '@tarojs/components'
import CompositionDataTileSmall from '@/component/tile'

import './index.scss'

export default function () {
  return (
    <View className='wrapper'>
      <View className="composite-row no-margin">
        <View className="composite-col composite-col-6">
          <CompositionDataTileSmall
            heading="Heading Heading Heading Heading Heading Heading Heading Heading Heading"
            subheading="Subheading Subheading Subheading Subheading Subheading"
            value="Value Value Value Value Value Value Value Value Value"
            metric="metric"
            label="Value label Value label Value label Value label Value label"
          />
        </View>
        <View className="composite-col composite-col-6">
          <CompositionDataTileSmall
            heading="Heading"
            subheading="Subheading"
            value="Value Value Value"
            metric="°C"
            label="Value label"
          />
        </View>
      </View>
      <View className="composite-row">
        <View className="composite-col composite-col-12">Icons</View>
      </View>
      <View className="composite-row">
        <View className="composite-col composite-col-6">
          <CompositionDataTileSmall
            heading="Heading"
            subheading="Subheading"
            value="500"
            metric="metric"
            label="steps"
          >
            <Image src='https://cdn-icons-png.flaticon.com/128/606/606795.png' style={{height: '24px', width: '24px'}}></Image>
          </CompositionDataTileSmall>
        </View>
        <View className="composite-col composite-col-6">
          <CompositionDataTileSmall heading="Heading" subheading="Subheading" value="500" label="steps">
            <Image src='https://cdn-icons-png.flaticon.com/128/606/606795.png' style={{height: '24px', width: '24px'}}></Image>
          </CompositionDataTileSmall>
        </View>
      </View>
      <View className="composite-row">
        <View className="composite-col composite-col-12"> Progress/Status bars </View>
      </View>
      <View className="composite-row">
        <View className="composite-col composite-col-6">
          <CompositionDataTileSmall
            heading="Heading"
            subheading="Subheading"
            value="Value"
            metric="metric"
            label="Value label"
          >
            <View className="progress-bar">
              <Progress
                percent={70}
                color="var(--composite-green-900)"
                background-color="var(--composite-background)"
                stroke-width="3"
              />
            </View>
          </CompositionDataTileSmall>
        </View>
        <View className="composite-col composite-col-6">
          <CompositionDataTileSmall
            heading="Heading"
            subheading="Subheading"
            value="40"
            metric="%"
            label="Value label"
          >
            <View className="progress-bar">
              <Progress
                percent={30}
                color="var(--composite-red-400)"
                background-color="#f3f3f6"
                stroke-width="3"
              />
            </View>
          </CompositionDataTileSmall>
        </View>
      </View>
      <View className="composite-row">
        <View className="composite-col composite-col-12">Single value line graph</View>
      </View>
      <View className="composite-row">
        <View className="composite-col composite-col-6">
          <CompositionDataTileSmall
            heading="Heading"
            subheading="Subheading"
            value="Value"
            metric="metric"
            label="Value label"
          >
            <View className="chart"></View>
          </CompositionDataTileSmall>
        </View>
        <View className="composite-col composite-col-6">
          <CompositionDataTileSmall
            heading="Heading"
            subheading="Subheading"
            value="500"
            metric="μg/m³"
            label="Value label"
          >
            <View className="chart"></View>
          </CompositionDataTileSmall>
        </View>
      </View>
    </View>
  )
}

import { View } from '@tarojs/components'
import React, { useState, useEffect } from 'react'

import './index.scss'

const defaultProps = {
  heading: '',
  subheading: '',
  value: '',
  metric: '',
  label: '',
  children: null
}

function Index(props) {
  const {
    heading,
    subheading,
    value,
    metric,
    label,
    children
  } = props

  const [ metricAfterValue, setValue ] = useState(false)

  const checkMetric = () => {
    if (!metric) {
      setValue(true)
    }
  }

  useEffect(() => {
    checkMetric()
  }, [metric])

  useEffect(() => {
    checkMetric()
  }, [])

  return (
    <View>
      <View className="composite-data-tile-small">
        <View
          className="composite-typeface-h3 composite-overflow-two-lines composite-data-tile-small__heading"
        >
          {heading}
        </View>
        <View
          className="composite-typeface-caption composite-overflow-one-line composite-data-tile-small__subheading"
        >
          {subheading}
        </View>
        <View className="composite-data-tile-small__content">
          {children}
        </View>
        <View
          className="composite-typeface-h2 composite-overflow-two-lines composite-data-tile-small__value"
        >
          {value}
          <text className="composite-typeface-metric composite-data-tile-small__metric"> {metric} </text>
        </View>

        {metricAfterValue && (
          <View
            className="composite-typeface-caption composite-overflow-one-line composite-data-tile-small__label"
          >
            {label}
          </View>
        )}
        {!metricAfterValue && (
          <View className="composite-typeface-metric composite-data-tile-small__metric_in-label">
            {metric}
          </View>
        )}
      </View>
    </View>
  )
}

Index.defaultProps = defaultProps

export default Index

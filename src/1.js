Ext.onReady(function () {
    var container = Stratum.containers || 'main-container';
    // Widget code goes here
    Profile.APIKey = 'bK3H9bwaG4o=';
    var store;
    store = Ext.create('Ext.data.Store', {
      fields: ['label', 'amount', 'reg'],
      data: [
        {
          label: 'riket',
          amount: 64.2132141241241241,
          reg: 3041,
        }, {
          label: 'Molnlycke',
          amount: 74.2132141241241241,
          reg: 3041,
        }, {
          label: 'Adams egna',
          amount: 94.2132141241241241,
          reg: 3041,
        }, {
          label: 'Kass mottagning',
          amount: 14.2132141241241241,
          reg: 3041,
        }, {
          label: 'meh mottagning',
          amount: 44.2132141241241241,
          reg: 3041,
        }
      ]
    });
    window.store = store;
    Ext.create('Ext.container.Container', {
        width: '100%',
        layout: 'fit',
        renderTo: container,
        items: {
            insetPadding: 0,
            xtype: 'chart',
            height: 257,
            flipXY: true,
            animation: false,
            colors: ['#3CB6CE', '#4BACC6', '#1e833f'],
            shadow: false,
            store: store,
            axes: [{
                type: 'category',
                position: 'left',
                fields: ['label'],
                style: {
                    strokeStyle: '#ccc',
                    fill: 'red'
                },
                label: {
                    textAlign: 'left',
                    background: 'blue'
                }
            }, {
                type: 'numeric',
                position: 'bottom',
                grid: true,
                minimum: 0,
                maximum: 100,
                majorTickSteps: 1,
                style: {
                    strokeStyle: '#ccc',
                }
            }],
            series: [{
                type: 'bar',
                tooltip: {
                    trackMouse: true,
                    defaultAlign: 'r-l',
                    renderer: function(storeItem, item) {
                        this.setHtml(storeItem.get('label') );
                    }
                },
                renderer: function(sprite, config, rendererData, index) {
                    var field = 'amount',
                        amount = rendererData.store.getAt(index).get(field);
                    if (amount < 30) {
                        return {
                            fill:  '#ed4826',
                        };
										} else if (amount > 30 && amount < 80) {
									    return {
                        fill: '#fbb600'
                      }
										} else {
                      return {
                        fill: '#009666'
                      }
                    }
                },
                style: {
                  opacity: 0.75 ,
                  strokeStyle: null,
                  minGapWidth: 10,
                },
                yField: 'amount',
                xField: 'label'
            }]
        }
    });

});

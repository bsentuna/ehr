import VitalsDataModule from './components/VitalsDataModule';
import getTimelineBloodPressureSystolic from './timelineData/getTimelineBloodPressureSystolic';
import getTimelineBloodPressureDiastolic from './timelineData/getTimelineBloodPressureDiastolic';

export default {
    id: 'plugin-vitals',
    path: '/vitals',
    name: 'Vitals',
    MenuModule: {
        name: 'Vitals',
        icon: 'FavoriteBorder',
        priority: 90,
    },
    WidgetModule: {
        name: 'Vitals',
        icon: 'FavoriteBorder',
        priority: 90,
    },
    DataModule: {
        Component: VitalsDataModule,
    },
    TimelineModule: [
        {
            name: 'Blood Pressure',
            color: '#36a3eb',
            icon: 'FavoriteBorder',
            children: [
                {
                    name: 'Systolic',
                    getData: getTimelineBloodPressureSystolic,
                },

                {
                    name: 'Diastolic',
                    getData: getTimelineBloodPressureDiastolic,
                },
            ],
        },
    ],
};

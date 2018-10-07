import wepy from 'wepy';
import api from '@/utils/api';
import render from '@/utils/render';
import time from '@/utils/time';

/// 依赖：this.noticeID & await this.$parent.fetchOpenGID()
/// 写回：this.notice
export default class testMixin extends wepy.mixin {
    async refreshNotice() {
        wepy.showNavigationBarLoading();
        try {
            let res = await api.authRequest(
                {
                    url: 'singleNotice',
                    method: 'POST',
                    data: {
                        noticeID: this.noticeID,
                        openGID: await this.$parent.fetchOpenGID()
                    }
                },
                false
            );
            if (res.data.success === -1) {
                await wepy.showModal({
                  title: '错误',
                  content: '该公告已删除',
                  showCancel: false
                });
                wepy.navigateBack();
                return;
              }
            this.notice = res.data;
            this.notice.noticeContentNodes = await render(this.notice.noticeContent);
            this.notice.createdAt = await time.getTime(this.notice.createdAt);
            this.$apply();

            await wepy.setNavigationBarTitle({
                title: this.notice.noticeTitle
            });

            await api.authRequest(
                {
                    url: 'gotNotice',
                    method: 'POST',
                    data: {
                        noticeID: this.noticeID,
                        openGID: await this.$parent.fetchOpenGID()
                    }
                },
                false
            );
        } catch (e) {
            console.error(e);
        }
        wepy.hideNavigationBarLoading();
    }
}
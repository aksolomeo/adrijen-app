<template>
	<div class="portfolio-page">
		<a-row :gutter="[16, 16]">
			<a-col v-for="(feature, index) in features" :key="index" :xs="24" :sm="12" :md="8">
				<a-card hoverable class="portfolio-page__card">
					<template #cover>
						<a-image-preview-group>
							<template v-if="feature.images.length === 1">
								<a-image :src="feature.images[0]" :alt="feature.title" :preview="{ mask: feature.title }" />
							</template>

							<template v-else>
								<a-carousel arrows>
									<template #prevArrow>
										<div class="custom-slick-arrow" style="left: 16px">
											<left-circle-outlined />
										</div>
									</template>

									<template #nextArrow>
										<div class="custom-slick-arrow" style="right: 16px">
											<right-circle-outlined />
										</div>
									</template>

									<div v-for="(img, i) in feature.images" :key="i">
										<a-image :src="img" :alt="feature.title" />
									</div>
								</a-carousel>
							</template>
						</a-image-preview-group>
					</template>

					<a-card-meta :title="feature.title" :description="feature.description" />
				</a-card>
			</a-col>
		</a-row>
	</div>
</template>

<script setup lang="ts">
	import { useI18n } from "vue-i18n";
	import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
	import type { PortfolioFeature } from "../interfaces";
	import DigitalGuestbook from "@/assets/images/portfolio/Digital Guestbook.jpg";
	import DigitalGuestbookMobile from "@/assets/images/portfolio/Digital Guestbook (Mobile).jpg";
	import GuestbookPreview from "@/assets/images/portfolio/Guestbook Preview.jpg";
	import OrderRequests from "@/assets/images/portfolio/Order Requests 2.0.jpg";
	import OrderRequestsDrawer from "@/assets/images/portfolio/Order Requests 2.0 (Details Drawer).jpg";
	import TemplateEditor from "@/assets/images/portfolio/Template Editor 3.0.jpg";
	import TemplateEditorEditing from "@/assets/images/portfolio/Template Editor 3.0 (Editing).jpg";
	import TemplateSelection from "@/assets/images/portfolio/Template Selection.jpg";
	import InlineEditor from "@/assets/images/portfolio/Inline Editor.jpg";
	import RoomUpgrades from "@/assets/images/portfolio/Room Upgrades.jpg";
	import RoomUpgradesEditing from "@/assets/images/portfolio/Room Upgrades (Editing).jpg";
	import RoomUpgradesCustomize from "@/assets/images/portfolio/Room Upgrades (Customize Page).jpg";
	import UserManagement from "@/assets/images/portfolio/User management.jpg";
	import UserManagementModal from "@/assets/images/portfolio/User management (Creating a user).jpg";
	import GroupCheckInTool from "@/assets/images/portfolio/Group Check-in Tool.jpg";
	import TabBar from "@/assets/images/portfolio/Tab Bar.jpg";

	const { t } = useI18n();

	const features: PortfolioFeature[] = [
		{
			title: t("VIEWS.PORTFOLIO.FEATURES.TEMPLATE_EDITOR.TITLE"),
			description: t("VIEWS.PORTFOLIO.FEATURES.TEMPLATE_EDITOR.DESCRIPTION"),
			images: [TemplateEditorEditing, TemplateEditor, InlineEditor, TemplateSelection],
		},
		{
			title: t("VIEWS.PORTFOLIO.FEATURES.ROOM_UPGRADES.TITLE"),
			description: t("VIEWS.PORTFOLIO.FEATURES.ROOM_UPGRADES.DESCRIPTION"),
			images: [RoomUpgradesEditing, RoomUpgrades, RoomUpgradesCustomize],
		},
		{
			title: t("VIEWS.PORTFOLIO.FEATURES.DIGITAL_GUESTBOOK.TITLE"),
			description: t("VIEWS.PORTFOLIO.FEATURES.DIGITAL_GUESTBOOK.DESCRIPTION"),
			images: [DigitalGuestbook, DigitalGuestbookMobile, GuestbookPreview],
		},
		{
			title: t("VIEWS.PORTFOLIO.FEATURES.USER_MANAGEMENT.TITLE"),
			description: t("VIEWS.PORTFOLIO.FEATURES.USER_MANAGEMENT.DESCRIPTION"),
			images: [UserManagementModal, UserManagement],
		},
		{
			title: t("VIEWS.PORTFOLIO.FEATURES.ORDER_REQUESTS.TITLE"),
			description: t("VIEWS.PORTFOLIO.FEATURES.ORDER_REQUESTS.DESCRIPTION"),
			images: [OrderRequests, OrderRequestsDrawer],
		},
		{
			title: t("VIEWS.PORTFOLIO.FEATURES.TAB_BAR.TITLE"),
			description: t("VIEWS.PORTFOLIO.FEATURES.TAB_BAR.DESCRIPTION"),
			images: [TabBar],
		},
		{
			title: t("VIEWS.PORTFOLIO.FEATURES.GROUP_CHECKIN_TOOL.TITLE"),
			description: t("VIEWS.PORTFOLIO.FEATURES.GROUP_CHECKIN_TOOL.DESCRIPTION"),
			images: [GroupCheckInTool],
		},
	];
</script>

<style scoped lang="scss">
	.portfolio-page {
		padding: 48px;
		margin-top: 4%;
		background: #e8eff6;

		&__card {
			border-radius: 8px;
		}
	}

	:deep(.ant-image-img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 8px 8px 0 0;
	}

	:deep(.ant-image) {
		display: block;
		aspect-ratio: 4 / 2.8;
		overflow: hidden;
	}

	.ant-carousel :deep(.slick-slide) {
		text-align: center;
		overflow: hidden;
	}

	.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
		width: 36px;
		height: 36px;
		font-size: 36px;
		color: #fff;
		opacity: 0.4;
		z-index: 1;
	}

	:deep(.ant-image-mask) {
		border-radius: 8px 8px 0 0;
	}

	.ant-carousel :deep(.custom-slick-arrow:before) {
		display: none;
	}

	.ant-carousel :deep(.custom-slick-arrow:hover) {
		opacity: 0.8;
	}

	:deep(.ant-carousel:hover .slick-active .ant-image-mask) {
		opacity: 1;
	}

	.ant-carousel :deep(.slick-slide h3) {
		color: #fff;
	}
</style>

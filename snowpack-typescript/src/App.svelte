<script lang="ts">
	import {
		Content,
		Breadcrumb,
		BreadcrumbItem,
		Grid,
		Row,
		Column,
		Tabs,
		TabContent,
		Tab,
		Select,
		SelectItem,
	} from "carbon-components-svelte";
	import Header from "./components/Header.svelte";
	import Theme from "./components/Theme.svelte";

	let theme: "g10" = "g10";
</script>

<Theme persist bind:theme>
	<Header />
	<Content style="background: none; padding: 1rem">
		<Grid>
			<Row>
				<Column lg="{16}">
					<Breadcrumb noTrailingSlash aria-label="Page navigation">
						<BreadcrumbItem href="/">Getting started</BreadcrumbItem>
					</Breadcrumb>
					<h1 style="margin-bottom: 1.5rem">Design &amp; build with Carbon and Snowpack!</h1>
				</Column>
			</Row>

			<Row>
				<Column noGutter>
					<Tabs aria-label="Tab navigation">
						<Tab label="About" />
						<Tab label="Design" />
						<Tab label="Develop" />
						<div slot="content" class="tabbed-content">
							<Grid as fullWidth let:props>
								<TabContent {...props}>
									<Row>
										<Column md="{4}" lg="{7}">
											<Select
													labelText="Carbon theme"
													bind:selected="{theme}"
													style="margin-bottom: 1rem"
											>
												<SelectItem value="white" text="White" />
												<SelectItem value="g10" text="Gray 10" />
												<SelectItem value="g90" text="Gray 90" />
												<SelectItem value="g100" text="Gray 100" />
											</Select>
											<p>
												Carbon is IBM’s open-source design system for digital
												products and experiences. With the IBM Design Language
												as its foundation, the system consists of working code,
												design tools and resources, human interface guidelines,
												and a vibrant community of contributors.
											</p>
										</Column>
									</Row>
								</TabContent>
								<TabContent {...props}>
									<Row>
										<Column md="{4}" lg="{7}">
											<div id="svelte-message2"></div>
										</Column>
									</Row>
								</TabContent>
								<TabContent {...props}>
									<Row>
										<Column md="{4}" lg="{7}">
											<div id="svelte-receive2"></div>
										</Column>
									</Row>
								</TabContent>
							</Grid>
						</div>
					</Tabs>
				</Column>
			</Row>
		</Grid>
	</Content>
</Theme>

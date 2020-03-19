<template>
    <div class="serverList">
        <Server
            v-for="server in servers"
            :key="server.id"
            :name="server.name"
            v-on:click.native="oneClick(server.id)"
        ></Server>
    </div>
</template>

<script>
    import Server from './Server.vue';

    export default {
        name: "ServerList",
        components: {
            Server
        },
        props: {
            servers: Object
        },
        data() {
            return {
                clicks: {
                    num: 0,
                    server: 0,
                }
            }
        },
        methods: {
            changeServer(serverId) {
                this.currentlySelected = serverId;
                console.log("New server: " + serverId);
                this.$emit("changedServer", serverId);
                // console.log(channelName);
            },
            oneClick(newServerId) {
                this.changeServer(newServerId);
                // console.log(this.clicks);
                this.clicks.num++;
                if (this.clicks.num === 1) {
                    let self = this;
                    this.clicks.server = newServerId;
                    this.timer = setTimeout(function () {
                        self.clicks.num = 0
                    }, 700);
                } else {
                    if (newServerId === this.clicks.server) {
                        clearTimeout(this.timer);
                        const selectedChannel = this.channels[this.currentlySelected];
                        this.$emit("openChannelModal", selectedChannel);
                        // console.log(this.modalDetails);
                        this.clicks.num = 0;
                    }
                }
            },
        }
    }
</script>

<style scoped>
    .serverList {
        grid-column: 1;
        grid-row: 1 / 21;
        /* background-color: #044289; */
        background-color: var(--aquifer-dark-2);
    }
</style>
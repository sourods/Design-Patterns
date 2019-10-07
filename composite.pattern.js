class Component {
    constructor(props) {
        this.props = props;
    }

    update() {
        console.log('default update');
    }

    add(child) {
        this.props.children.push(child);
    }

    remove(child) {
        this.props.children.splice(this.props.children.indexOf(child));
    }

    getChild(name) {
        return this.props.children.find(function(child){
            return child.props.name == name;
        });
    }
}

module.exports = Component;